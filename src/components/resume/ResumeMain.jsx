 import React from 'react';


 

const ResumeMain = () =>{
    

    return (

        <main className="flex lg:gap-x-10 mt-10 justify-center">
            
            {/* info */}
            <div className=" text-gray-800  text-primary-dark dark:text-primary-light">
                <section >
                    {/* about me */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl  pb-1 border-b font-semibold ">About</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
                        deserunt modi qui. Dolorum aliquid quasi velit cupiditate officia magnam impedit, sapiente
                        hic, eaque quaerat ullam fugiat reprehenderit voluptates odit! Error.
                        Tempore fuga iusto eveniet omnis impedit repellat ab repellendus nesciunt similique. Iure
                        voluptates, enim nesciunt tempora amet earum, porro rem ad et sequi corrupti neque quidem?
                        Debitis quo quibusdam nemo.
                        Nam doloremque perferendis tempora asperiores, ullam praesentium et, voluptas pariatur illo
                        aliquid similique, fugiat repellendus ipsa necessitatibus minus hic culpa quasi. Sed
                        voluptate itaque accusantium earum cupiditate ipsa neque magnam!</p>

                </section>
                <section className='text-primary-dark dark:text-primary-light'>
                    {/* projects */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl  mt-6 pb-1 border-b font-semibold">Projects</h2>
                    <ul className="mt-1">
                        <li className="py-2">
                            <div className="flex justify-between my-1">
                                <strong className="text-sm md:text-md lg:text-xl">Rules of 10000 hours</strong>
                                <p className="flex">
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
                                </p>
                            </div>
                            <ul className="flex mb-2">
                                <li><a href='/hello-href' className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                </li>
                                <li><a href='/hello-href' className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                </li>
                            </ul>
                            <p className="text-xs md:text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                                delectus labore enim in minus quod vero dignissimos et, ratione obcaecati quis
                                maiores? Voluptatem, natus cupiditate perferendis omnis ex hic incidunt!
                                Earum dolore cupiditate sed et maxime distinctio iure fugiat aspernatur at veniam
                                laudantium eveniet corporis dicta reiciendis quod consequatur, labore perferendis
                                dolorum velit quibusdam minus iste dolorem! Officiis, obcaecati maxime</p>
                        </li>
                        <li className="py-2">
                            <div className="flex justify-between my-1">
                                <strong className="text-sm md:text-md lg:text-xl">Vending Machine</strong>
                                <p className="flex">
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
                                </p>
                            </div>
                            <ul className="flex mb-2">
                                <li><a href="/project-live-show" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                </li>
                                <li><a href="/project-source" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                </li>
                            </ul>
                            <p className="text-xs md:text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                                expedita illum optio porro suscipit rerum labore veritatis autem eum totam veniam
                                repudiandae repellendus perspiciatis eligendi sequi maiores, cum ipsa ut!
                                Dolorum aliquid quaerat, dolore nemo, vero alias non porro quam totam impedit
                                repellat voluptas, nobis harum quae dolorem accusantium consequatur. Recusandae
                                cupiditate possimus natus consequuntur aliquid, molestias provident saepe nobis.
                            </p>
                        </li>
                        <li className="py-2">
                            <div className="flex justify-between my-1">
                                <strong className="text-sm md:text-md lg:text-xl">Landing Page</strong>
                                <p className="flex">
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">React</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">Node.js</span>
                                </p>
                            </div>
                            <ul className="flex mb-2">
                                <li><a href="/project-live" className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                </li>
                                <li><a href='/hello-href' className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                </li>
                            </ul>
                            <p className="text-xs md:text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                                odio autem non possimus adipisci, sed sequi culpa ipsa necessitatibus repellat
                                rerum. Obcaecati nobis modi voluptate nam minus praesentium soluta voluptatibus!
                                Minima temporibus deserunt laborum, expedita ad molestiae perferendis? Ipsa aut,
                                necessitatibus expedita rem iure minus sit voluptates magni, sequi eum architecto
                                excepturi tempora dolorum soluta quam odit amet nobis incidunt.</p>
                        </li>
                        <li className="py-2">
                            <div className="flex justify-between my-1">
                                <strong className='text-sm md:text-md lg:text-xl'>Gamgyul Market</strong>
                                <p className="flex">
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">React</span>
                                    <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">Node.js</span>
                                </p>
                            </div>
                            <ul className="flex mb-2">
                                <li><a href='/hello-href' className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Live</a>
                                </li>
                                <li><a href='/hello-href' className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded">Code</a>
                                </li>
                            </ul>
                            <p className="text-xs md:text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
                                suscipit soluta at doloremque ipsa unde, doloribus beatae delectus odio dolorum
                                consequatur libero esse ratione nostrum nihil quaerat alias cupiditate assumenda?
                                Nesciunt unde aliquid quam quisquam excepturi deserunt ipsa doloremque culpa itaque.
                                Esse consectetur odit est laboriosam facilis! Accusamus inventore vel magni sed
                                aliquid! Aspernatur dolores, nam id fugit ad aliquam.
                            </p>
                        </li>
                    </ul>
                </section>
                <section className='text-primary-dark dark:text-primary-light'>
                    {/* work experiences */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl  mt-6 pb-1 border-b font-semibold">Work Experiences</h2>
                    <ul className="mt-2">
                        <li className="pt-2">
                            <p className="flex justify-between text-sm md:text-md lg:text-xl"><strong className="text-base">Company Name</strong>2019-2021</p>
                            <p className="flex justify-between text-base md:text-md lg:text-xl">Job title<small>location</small></p>
                            <p className="text-justify text-xs md:text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorum, expedita exercitationem, cum quisquam laboriosam voluptas aut libero
                                officiis quae natus laborum explicabo, labore nobis porro ad et soluta deleniti.
                                Rerum?
                                Voluptatibus id officiis adipisci eligendi provident minima sed. Ullam aliquid, fuga
                                nisi modi amet quasi, quod veniam eos sit culpa distinctio rem a tempora ad autem
                                soluta rerum, doloremque quas?
                            </p>
                        </li>
                        <li className="pt-2">
                            <p className="flex justify-between text-sm  md:text-md lg:text-xl"><strong className="text-base">Company Name</strong>2014-2019</p>
                            <p className="flex justify-between text-base md:text-md lg:text-xl">Job title<small>location</small></p>
                            <p className="text-justify text-xs md:text-ms md:text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Delectus nemo fugiat neque tempore consectetur nihil alias ullam esse corporis fugit
                                deserunt maxime, numquam eos repellendus, deleniti quae at fuga repudiandae!
                                Perspiciatis odit nobis sunt! Natus ea reiciendis enim! Itaque possimus eaque
                                perspiciatis architecto reiciendis laboriosam voluptas corporis unde ducimus quis
                                aliquid, distinctio dolorum quo ullam a at, fugit veniam optio.
                            </p>
                        </li>
                    </ul>
                </section>
                <section className='text-primary-dark dark:text-primary-light'>
                    {/* education */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl  mt-6 pb-1 border-b font-semibold">Education</h2>
                    <ul className="mt-2">
                        <li className="pt-2">
                            <p className="flex justify-between text-sm md:text-md lg:text-xl"><strong className="text-base">Hello
                                    Univerisity</strong>2022-2019</p>
                            <p className="flex justify-between text-sm md:text-md">Digital marketing<small>GPA 4.0</small></p>
                        </li>
                        <li className="pt-2">
                            <p className="flex justify-between text-sm md:text-md lg:text-xl"><strong className="text-base">World
                                    Univerisity</strong>2022-2019</p>
                            <p className="flex justify-between text-sm md:text-md">Fashion Design<small>GPA 3.8</small></p>
                        </li>
                    </ul>
                </section>
            </div>
        
        </main>
    )
}


export default ResumeMain;