import React from "react"
import {ResumeHeader, ResumeMain, ResumeFooter} from '../components/resume'

const Resume = () =>{
    return (
        <div className = "w-full flex justify-center content-center">
            <div className="border border-gray-300 rounded-sm shadow-2xl py-10 px-10 w-4/5 mt-10 mb-10">
                <ResumeHeader />
                <ResumeMain />
                <ResumeFooter />
            </div>
      </div>
    )
}


export default Resume;