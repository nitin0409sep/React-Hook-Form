import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useState } from 'react';

type Input = {
    name: string,
    age: number,
    dob: Date,
}

let renderCount = 0;

const Touch_Dirty = () => {
    const { register, control, handleSubmit, getValues, setValue, formState } = useForm<Input>({
        defaultValues: {
            name: "",
        }
    });

    const { touchedFields, dirtyFields, isDirty } = formState;

    console.log({ touchedFields, dirtyFields, isDirty }); //! Dirty - True => If Changes value from default value

    const [name, setName] = useState("");
    console.log(name);

    const onSubmit: SubmitHandler<Input> = (data: Input) => {
        console.log("Form Submitted!!! ", data);
    }

    function handleGetValues() {
        // Get AlL Form Values
        console.log(getValues());

        // Get Specific Value
        console.log(getValues("name"));

        // Get Required/Needed Fields Value
        console.log(getValues(["name", "age"]));
    }

    function handleSetValues() {
        setValue("name", "", {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        });
    }


    renderCount++;
    return (
        <>
            <h2>Touch & Dirty Properties ({renderCount})</h2>

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
                <input type="text" id="name" {...register("name")} style={{ paddingLeft: "5px" }}
                    onChange={(e) => setName(e.target.value)} />

                <label
                    htmlFor="age"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Age
                </label>
                {/* //? valueAsNumber - will ensures that value goes as number, not as string */}
                <input type="number" id="age" {...register("age", { valueAsNumber: true })} style={{ paddingLeft: "5px" }} />

                <label
                    htmlFor="dob"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    DOB
                </label>
                {/* //? valueAsNumber - will ensures that value goes as number, not as string */}
                <input type="date" id="dob" {...register("dob", { valueAsDate: true })} style={{ paddingLeft: "5px" }} />

                <button
                    type="submit"
                    style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}
                >Submit</button>

                <button type='button'
                    onClick={handleGetValues}
                    style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}
                >Get All Form Values</button>

                <button type='button'
                    onClick={handleSetValues}
                    style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}
                >Set Form Field Value</button>
            </form >

            <DevTool control={control} />
        </>
    );
};

export default Touch_Dirty;