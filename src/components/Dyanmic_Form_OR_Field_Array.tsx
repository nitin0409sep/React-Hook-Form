import { SubmitHandler, useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type Input = {
  name: string,
  phNumbers: {
    number: string,
  }[]
}

const Dyanmic_Form_OR_Field_Array = () => {
  const { register, control, handleSubmit } = useForm<Input>({
    defaultValues: {
      name: "",
      phNumbers: [{
        number: ""
      }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control
  })


  const onSubmit: SubmitHandler<Input> = (data: Input) => {
    console.log("Form Submitted!!! ", data);
  }

  return (
    <>
      <h2>Dynamic Fields</h2>

      <form
        style={{
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "200px 1fr",
          width: "700px",
          border: "2px solid black",
          columnGap: "20px",
          rowGap: "10px",
          padding: "20px",
          marginTop: "20px",
        }}

        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label
          htmlFor="name"
          style={{ alignSelf: "start", justifySelf: "start" }}
        >
          Name
        </label>
        <input type="text" id="name" {...register("name")} style={{ paddingLeft: "5px" }} />

        <label
          htmlFor="phNumbers"
          style={{ alignSelf: "start", justifySelf: "start" }}
        >
          List of Phone Numbers
        </label>

        {
          fields.map((field, index) => {
            return (
              <>
                <input type="text" {...register(`phNumbers.${index}.number` as const)} key={field.id} />

                {index > 0 && (
                  <button type='button' onClick={() => remove(index)} style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>Remove Phone Number</button >)
                }
              </>
            )
          })
        }

        <button type='button' onClick={() => append({ number: "" })} style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>Add Phone Number</button>


        <button
          type="submit"
          style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}
        >Submit</button>
      </form >

      <DevTool control={control} />
    </>
  );
};

export default Dyanmic_Form_OR_Field_Array