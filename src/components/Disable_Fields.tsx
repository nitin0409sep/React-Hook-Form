import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type Input = {
    name: string,
    age: number,
    dob: Date,
}

let renderCount = 0;

const Disable_Fields = () => {
    const { register, control, handleSubmit, watch } = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = (data: Input) => {
        console.log("Form Submitted!!! ", data);
    }

    console.log(watch("name"));

    renderCount++;
    return (
        <>
            <h2>Field Disabled ({renderCount})</h2>

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

                {/* //! Once field is disabled using useFormHook, the validations will also be disabled, for e.g. required and the value is set to undefined */}
                <input type="text" id="name" {...register("name", {
                    disabled: true
                })} style={{ paddingLeft: "5px" }} />

                <label
                    htmlFor="age"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Age
                </label>
                {/* //? valueAsNumber - will ensures that value goes as number, not as string */}
                <input type="number" id="age" {...register("age", {
                    valueAsNumber: true,
                    // disabled: watch("name") === ""
                })} style={{ paddingLeft: "5px" }} />

                <label
                    htmlFor="dob"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    DOB
                </label>
                {/* //? valueAsNumber - will ensures that value goes as number, not as string */}
                <input type="date" id="dob" {...register("dob", { valueAsDate: true })} style={{ paddingLeft: "5px" }} />

            </form >

            <DevTool control={control} />
        </>
    );
};

export default Disable_Fields;