import React from "react"
import {ResumeHeader, ResumeMain, ResumeFooter} from '../components/resume'

const Resume = () =>{
    return (
        <div className = "w-full flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center mt-20 mb-6 ">
				<p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light">
					My Resume
				</p>
			</div>
            <div className="border border-gray-300 rounded-sm shadow-2xl py-10 px-10 w-4/5 mt-10 mb-10">
                <ResumeHeader />
                <ResumeMain />
                <ResumeFooter />
            </div>
      </div>
    )
}

export default Resume;