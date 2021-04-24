import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SideEffects.css";
import { Link } from "react-scroll";
import { Container, Table, Button, Col, Row } from "react-bootstrap";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";
// import * as yup from "yup";
import { Formik, FieldArray, Form, Field } from "formik";
import SelectField from "../FormFields/SelectField";

const SideEffectsStyled = styled.div``;

// temporary values
const options1 = [
    { value: "headache", label: "Headache" },
    { value: "nausea", label: "Nausea" },
    { value: "soreness", label: "Soreness" },
];

const options2 = [
    { value: "daily", label: "Daily" },
    { value: "everyOtherDay", label: "Every Other Day" },
    { value: "sometimes", label: "Sometimes" },
];

const options3 = [
    { value: "afterMeals", label: "After Meals" },
    { value: "afterExcercise", label: "After Excercising" },
    { value: "tired", label: "When Tired" },
];

const filterOptions1 = (inputValue) => {
    return options1.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const filterOptions2 = (inputValue) => {
    return options2.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const filterOptions3 = (inputValue) => {
    return options3.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const promiseOptions1 = (inputValue) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterOptions1(inputValue));
        }, 1000);
    });

const promiseOptions2 = (inputValue) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterOptions2(inputValue));
        }, 1000);
    });

const promiseOptions3 = (inputValue) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterOptions3(inputValue));
        }, 1000);
    });

// const REQUIRED_MESSAGE = "Required";
// const validationSchema = yup.object().shape({
//     sideEffects: yup.array().of(
//         yup.object().shape({
//             value: yup.string().required(REQUIRED_MESSAGE),
//         })
//     ),
//     frequency: yup.array().of(
//         yup.object().shape({
//             value: yup.string().required(REQUIRED_MESSAGE),
//         })
//     ),
//     patterns: yup.array().of(
//         yup.object().shape({
//             value: yup.string().required(REQUIRED_MESSAGE),
//         })
//     ),
// });

export default class SideEffects extends Component {
    render() {
        return (
            <SideEffectsStyled id="sideEffects">
                <Wrapper>
                    <Container fluid="md">
                        <h2>Symptoms and Side Effects 💊</h2>
                        <Formik
                            // validateOnChange={true}
                            // validationSchema={validationSchema}
                            initialValues={{
                                sideEffects: [
                                    {
                                        sideEffect: "",
                                        frequency: "",
                                        patterns: "",
                                    },
                                ],
                            }}
                            onSubmit={(
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                // When button submits form and form is in the process of submitting, submit button is disabled
                                setSubmitting(true);

                                // Resets form after submission is complete
                                resetForm();

                                // make async call

                                // Sets setSubmitting to false after form is reset
                                setSubmitting(false);
                            }}
                            render={({
                                isSubmitting,
                                values,
                                setFieldValue,
                                // errors,
                                // touched,
                            }) => (
                                <Form>
                                    <FieldArray
                                        name="sideEffects"
                                        render={(arrayHelpers) => (
                                            <div>
                                                <Container className="flex-row justify-content-center">
                                                    <Table
                                                        responsive="sm"
                                                        hover
                                                    >
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th colspan="4">
                                                                    Symptoms &
                                                                    Side Effects
                                                                </th>
                                                                <th>
                                                                    Frequency
                                                                </th>
                                                                <th>
                                                                    Notable
                                                                    Patterns
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {values.sideEffects.map(
                                                                (
                                                                    sideEffect,
                                                                    i
                                                                ) => (
                                                                    <tr key={i}>
                                                                        <td colspan="1">
                                                                            <Button
                                                                                onClick={() =>
                                                                                    arrayHelpers.remove(
                                                                                        i
                                                                                    )
                                                                                }
                                                                            >
                                                                                -
                                                                            </Button>
                                                                        </td>
                                                                        <td colspan="3">
                                                                            <SelectField
                                                                                name={`sideEffects.${i}.sideEffect`}
                                                                                value={
                                                                                    values
                                                                                        .sideEffects[
                                                                                        i
                                                                                    ]
                                                                                        .sideEffect
                                                                                }
                                                                                onChange={
                                                                                    setFieldValue
                                                                                }
                                                                                promiseOptions={
                                                                                    promiseOptions1
                                                                                }
                                                                            />
                                                                        </td>
                                                                        <td>
                                                                            <SelectField
                                                                                name={`sideEffects.${i}.frequency`}
                                                                                value={
                                                                                    values
                                                                                        .sideEffects[
                                                                                        i
                                                                                    ]
                                                                                        .frequency
                                                                                }
                                                                                onChange={
                                                                                    setFieldValue
                                                                                }
                                                                                promiseOptions={
                                                                                    promiseOptions2
                                                                                }
                                                                            />
                                                                        </td>
                                                                        <td>
                                                                            <SelectField
                                                                                name={`sideEffects.${i}.patterns`}
                                                                                value={
                                                                                    values
                                                                                        .sideEffects[
                                                                                        i
                                                                                    ]
                                                                                        .patterns
                                                                                }
                                                                                onChange={
                                                                                    setFieldValue
                                                                                }
                                                                                promiseOptions={
                                                                                    promiseOptions3
                                                                                }
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            )}
                                                        </tbody>
                                                    </Table>
                                                    <Button
                                                        variant="primary"
                                                        onClick={() =>
                                                            arrayHelpers.push({
                                                                sideEffect: "",
                                                                frequency: "",
                                                                patterns: "",
                                                            })
                                                        }
                                                    >
                                                        Add
                                                    </Button>
                                                    <Button
                                                        variant="primary"
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                    >
                                                        <Link
                                                            to="optimization"
                                                            spy={true}
                                                            smooth={true}
                                                        >
                                                            Next
                                                        </Link>
                                                    </Button>
                                                    <pre>
                                                        {JSON.stringify(
                                                            values,
                                                            null,
                                                            2
                                                        )}
                                                    </pre>
                                                </Container>
                                            </div>
                                        )}
                                    />
                                </Form>
                            )}
                        />
                    </Container>
                </Wrapper>
            </SideEffectsStyled>
        );
    }
}
