import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Wrapper from "../Wrapper/Wrapper";
import styled from "styled-components";

const PatientReportStyled = styled.div``;

export default class PatientReport extends Component {
    render() {
        return (
            <PatientReportStyled id="patientReport">
                <Wrapper>
                    <div class="container">
                        <h1>This is the Patient Report section</h1>
                    </div>
                </Wrapper>
            </PatientReportStyled>
        );
    }
}
