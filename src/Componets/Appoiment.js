// import React,{useState} from 'react';

// function Appoiment(props) {

//     const [login,setLogin]= useState('Login')
//     const [Signup,setSignup]= useState(false)

//     return (
//         <>
//             <section id="appointment" className="appointment">
//                 <div className="container">
//                     <div className="section-title">
                       
//                         <h2>Login</h2>
//                     </div>
//                     <form action method="post" role="form" className="php-email-form">
//                         <div className="row">
//                             <div className="col-md-4 form-group">
//                                 <input type="email" name="email" className="form-control" id="email" placeholder="Your email" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                                 <div className="validate" />
//                             </div>
//                             <div className="col-md-4 form-group mt-3 mt-md-0">
//                                 <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password" data-rule="email" data-msg="Please enter a valid email" />
//                                 <div className="validate" />
//                             </div>
//                             <div className="col-md-4 form-group mt-3 mt-md-0">
//                                 <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                                 <div className="validate" />
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-4 form-group mt-3">
//                                 <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                                 <div className="validate" />
//                             </div>
//                             <div className="col-md-4 form-group mt-3">
//                                 <select name="department" id="department" className="form-select">
//                                     <option value>Select Department</option>
//                                     <option value="Department 1">Department 1</option>
//                                     <option value="Department 2">Department 2</option>
//                                     <option value="Department 3">Department 3</option>
//                                 </select>
//                                 <div className="validate" />
//                             </div>
//                         </div>
//                             <div className="form-group mt-3">
//                                 <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
//                                 <div className="validate" />
//                             </div>
//                         <div className="mb-3">
//                             <div className="loading">Loading</div>
//                             <div className="error-message" />
//                         </div>
//                         {
//                             setLogin === 'login' ? useState('login') 
//                             :<>
//                                <div className="text-center"><button type="submit">Login</button></div>
//                             <div className="col-md-4 form-group">
//                                 <input type="text" name="name" className="form-control" id="name" placeholder="Your email" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
//                                 <div className="validate" />
//                             </div>
//                             </>
//                         }
//                         <br />
//                         {
//                             useState === true ? setSignup
//                             :<div className="text-center"><button type="submit">Signup</button></div>
//                         }

                        
                        
//                     </form>
//                 </div>
//             </section>

//         </>
//     );
// }

// export default Appoiment;