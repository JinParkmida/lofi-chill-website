import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Chip } from '@mui/material';
import { useAppDispatch } from '../../store/store';
import { addEntry } from '../../store/slice/moodJournalSlice';
import { IMoodEntry } from '../../types/interface';
import './styles.scss';

const MoodJournal: React.FC = () => {
  const dispatch = useAppDispatch();

  const initialValues: Omit<IMoodEntry, 'id'> = {
    date: new Date().toISOString().split('T')[0],
    mood: 'calm',
    entry: '',
    tags: []
  };

  return (
    <div className="mood-journal">
      <h2>Mood Journal</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(addEntry({
            ...values,
            id: Date.now().toString()
          }));
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="journal-form">
            <Field
              name="date"
              type="date"
              as={TextField}
              fullWidth
              label="Date"
              InputLabelProps={{ shrink: true }}
            />

            <FormControl fullWidth>
              <InputLabel>How are you feeling?</InputLabel>
              <Field
                name="mood"
                as={Select}
                label="How are you feeling?"
              >
                <MenuItem value="happy">Happy 😊</MenuItem>
                <MenuItem value="calm">Calm 😌</MenuItem>
                <MenuItem value="anxious">Anxious 😰</MenuItem>
                <MenuItem value="sad">Sad 😢</MenuItem>
                <MenuItem value="energetic">Energetic ⚡</MenuItem>
              </Field>
            </FormControl>

            <Field
              name="entry"
              as={TextField}
              fullWidth
              multiline
              rows={6}
              label="Journal Entry"
              placeholder="Write about your day..."
            />

            <div className="tags-section">
              <Field
                name="tags"
                as={TextField}
                fullWidth
                label="Tags"
                placeholder="Add tags (comma separated)"
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const target = e.target as HTMLInputElement;
                    const newTags = target.value.split(',').map(tag => tag.trim());
                    setFieldValue('tags', [...values.tags, ...newTags]);
                    target.value = '';
                  }
                }}
              />
              <div className="tags-container">
                {values.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={() => {
                      const newTags = values.tags.filter((_, i) => i !== index);
                      setFieldValue('tags', newTags);
                    }}
                  />
                ))}
              </div>
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Save Entry
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MoodJournal;