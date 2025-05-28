import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useAppDispatch } from '../../store/store';
import { addRoutine } from '../../store/slice/skincareSlice';
import { ISkinCareRoutine } from '../../types/interface';
import './styles.scss';

const SkincareTracker: React.FC = () => {
  const dispatch = useAppDispatch();

  const initialValues: Omit<ISkinCareRoutine, 'id'> = {
    date: new Date().toISOString().split('T')[0],
    timeOfDay: 'AM',
    steps: {
      cleanser: '',
      toner: '',
      serum: '',
      moisturizer: '',
      sunscreen: '',
      other: ''
    },
    notes: ''
  };

  return (
    <div className="skincare-tracker">
      <h2>Skincare Routine Tracker</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(addRoutine({
            ...values,
            id: Date.now().toString()
          }));
        }}
      >
        {({ values }) => (
          <Form className="skincare-form">
            <Field
              name="date"
              type="date"
              as={TextField}
              fullWidth
              label="Date"
              InputLabelProps={{ shrink: true }}
            />

            <FormControl fullWidth>
              <InputLabel>Time of Day</InputLabel>
              <Field
                name="timeOfDay"
                as={Select}
                label="Time of Day"
              >
                <MenuItem value="AM">Morning Routine</MenuItem>
                <MenuItem value="PM">Evening Routine</MenuItem>
              </Field>
            </FormControl>

            <Field
              name="steps.cleanser"
              as={TextField}
              fullWidth
              label="Cleanser"
              placeholder="Enter cleanser used"
            />

            <Field
              name="steps.toner"
              as={TextField}
              fullWidth
              label="Toner"
              placeholder="Enter toner used"
            />

            <Field
              name="steps.serum"
              as={TextField}
              fullWidth
              label="Serum"
              placeholder="Enter serum used"
            />

            <Field
              name="steps.moisturizer"
              as={TextField}
              fullWidth
              label="Moisturizer"
              placeholder="Enter moisturizer used"
            />

            {values.timeOfDay === 'AM' && (
              <Field
                name="steps.sunscreen"
                as={TextField}
                fullWidth
                label="Sunscreen"
                placeholder="Enter sunscreen used"
              />
            )}

            <Field
              name="steps.other"
              as={TextField}
              fullWidth
              label="Other Products"
              placeholder="Enter any other products used"
            />

            <Field
              name="notes"
              as={TextField}
              fullWidth
              multiline
              rows={4}
              label="Notes"
              placeholder="Enter any notes about your routine"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Save Routine
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SkincareTracker;