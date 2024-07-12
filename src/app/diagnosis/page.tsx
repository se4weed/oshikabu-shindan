"use client";
import React, { useState } from 'react'
import { AgreementDialog } from './AgreementDialog';
import { DiagnosisDialog } from './DiagnosisDialog';


export default function Diagnosis() {
  const [agree, setAgree] = useState<boolean>(false)
  const [formState, setFormState] = useState(false)
  return (
    <React.Fragment>
      {agree ?
      (
        <DiagnosisDialog open={agree} />
      )
      :(
        <AgreementDialog open={!agree} closer={() => setAgree(true)} />
      )}
    </React.Fragment>
  )
}
