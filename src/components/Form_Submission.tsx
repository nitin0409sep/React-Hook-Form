import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type Input = {
    name: string,
    age: number,
}

let renderCount = 0;

const Form_Submission = () => {
    const { register, control, handleSubmit, formState, reset, trigger } = useForm<Input>({
        defaultValues: {
            name: "",
            age: 0,
        },
        mode: "onTouched",
    });

    const { errors, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } = formState;

    // SubmitCount - No of times form is submitted
    console.log({ isSubmitted, isSubmitting, isSubmitSuccessful, submitCount })

    //! Form Submission
    const onSubmit: SubmitHandler<Input> = async (data: Input) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("Form Submitted!!! ", data);
                resolve(true);
            }, 2000)
        })
    }

    //! When form submission fails due to some error this will be called
    const onError = (errors: FieldErrors<Input>) => {
        console.log("Form Errors:", errors)
    }


    const handleResetForm = () => {
        reset();
    }

    renderCount++;
    return (
        <>
            <h2>Form Submission ({renderCount})</h2>

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

                onSubmit={handleSubmit(onSubmit, onError)}
                noValidate
            >
                <label
                    htmlFor="name"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Name
                </label>
                <input type="text" id="name" {...register("name", {
                    required: {
                        value: true,
                        message: "name is required",
                    }
                })} style={{ paddingLeft: "5px" }}
                />
                {errors.name && errors.name?.message}

                <label
                    htmlFor="age"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Age
                </label>
                {/* //? valueAsNumber - will ensures that value goes as number, not as string */}
                <input type="number" id="age" {...register("age", {
                    valueAsNumber: true, required: {
                        value: true,
                        message: "age is required",
                    }
                })} style={{ paddingLeft: "5px" }} />
                {errors.age && errors.age?.message}

                <button disabled={!isDirty || !isValid || isSubmitting} type='submit'>Submit</button>

                <button onClick={handleResetForm} type='submit'>Reset</button>

                <button onClick={() => trigger()}>Trigger Validation</button>
            </form >

            <DevTool control={control} />
        </>
    );
};

export default Form_Submission;