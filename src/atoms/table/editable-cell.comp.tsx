import React, { KeyboardEventHandler } from 'react';
import { useForm } from 'react-hook-form';

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { values },
  column: { id },
  onEdit // This is a custom function that we supplied to our table instance
}: any) => {
  // We need to keep and update the state of the cell normally
  const [showInput, setShowInput] = React.useState(false);
  const { register, errors, setValue, getValues } = useForm({
    mode: 'all',
    defaultValues: {
      cell: initialValue
    }
  });

  React.useEffect(() => {
    setValue('cell', initialValue);
  }, [initialValue]);

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    setShowInput(false);
    onEdit(values, id, getValues('cell'));
  };

  const onKeyDown: KeyboardEventHandler = (e) => {
    console.log(errors);
    if (e.key === 'Enter' || e.key === 'Escape') {
      setShowInput(false);
      e.key === 'Escape' || onEdit(values, id, getValues('cell'));
    }
  };

  // If the initialValue is changed external, sync it up with our state

  return showInput ? (
    <form>
      <input
        name='cell'
        ref={register({ required: true })}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        autoFocus
      />
      {errors.cell && <div>This field is required</div>}
    </form>
  ) : (
    <span onClick={() => setShowInput(true)}>{initialValue}</span>
  );
};

export default EditableCell;
