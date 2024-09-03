import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type Input = {
  name: string,
  email: string,
  channel: string,
  social: {
    twitter: string,
    fb: string,
  }
}

const Nested_Form = () => {

  const { register, control, handleSubmit, formState } = useForm<Input>();
  const { errors } = formState;

  const { name, ref, onBlur, onChange } = register("name", {
    required: {
      value: true,
      message: "Name is required"
    }
  });

  const onSubmit: SubmitHandler<Input> = (data: Input) => {
    console.log("Form values", data);
  }

  return (
    <>
      <h2>Form 02</h2>

      <form
        style={{
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "50px 1fr",
          width: "300px",
          border: "2px solid black",
          columnGap: "20px",
          rowGap: "10px",
          padding: "20px",
          marginTop: "20px",
        }}

        onSubmit={handleSubmit(onSubmit)}
        noValidate //! Prveent broweser validation, allowing react hook validation
      >
        <label
          htmlFor="name"
          style={{ alignSelf: "start", justifySelf: "start" }}
        >
          Name
        </label>
        <input type="text" id="name" name={name} ref={ref} onChange={onChange} onBlur={onBlur} style={{ paddingLeft: "5px" }} />
        <p style={{ alignSelf: "start", justifySelf: "start", gridColumnStart: "2", gridColumnEnd: "-1", color: "red" }}>{errors?.name?.message}</p>

        <label
          htmlFor="twitter"
          style={{ alignSelf: "start", justifySelf: "start" }}
        >
          Twitter
        </label>
        <input type="text" id="twitter" {...register("social.twitter")} />

        <label
          htmlFor="fb"
          style={{ alignSelf: "start", justifySelf: "start" }}
        >
          Facebook
        </label>
        <input type="text" id="twitter" {...register("social.fb")} />


        <button
          type="submit"
          style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}
        >Submit</button>
      </form>

      <DevTool control={control} />
    </>
  );
};


export default Nested_Form