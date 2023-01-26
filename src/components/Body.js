import React from 'react';

export default function 
() {
  return (
    <div className='body-input'>
        <hr/>
       <div >
            <form className='form-input'>
                <p className='input-Label'>Name</p>
                    <input className='name-input-area' type="text" name="name" />
                        <div>
                            <div className='dual-input'>
                                    <div className='dual-input-group' >
                                        <p className='input-Label'>Communication</p>                
                                        <select className='value-input-area'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        </select>

                                        <p className='input-Label'>Perfomance</p>
                                        <select className='value-input-area'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        </select>



                                    </div>
                                    

                            </div>
                            
                         </div>
                    <input className='submit-btn' type="submit" value="Submit" />
            </form>
       </div>
        
    </div>
  )
}
