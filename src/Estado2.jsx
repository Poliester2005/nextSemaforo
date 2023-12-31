import { } from 'react'
import './Estados.scss'

export default function Estado2() {
    return (
        <>
            <div >
                <main className='container'>
                    <div></div>
                    <div className='SemSec Meio'>
                        <label>
                            <input type='radio' name='SemSec' className='SemVerm' checked='checked'></input>
                            <span className="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' name='SemSec' className='SemAma'></input>
                            <span className="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' name='SemSec' className='SemVerd'></input>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div></div>
                    <div className='SemPrincPed Meio'>
                        <label>
                            <input type='radio' name='SemPrincPed' className='SemVerm' checked='checked'></input>
                            <span className="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' name='SemPrincPed' className='SemVerd'></input>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className='Meio'></div>
                    <div className='SemPrinc Meio'>
                        <label>
                            <input type='radio' name='SemPrinc' className='SemVerm' ></input>
                            <span className="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' name='SemPrinc' className='SemAma' checked='checked'></input>
                            <span className="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' name='SemPrinc' className='SemVerd' ></input>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div></div>
                    <div className='SemSecPed Meio'>
                        
                        <label>
                            <input type='radio' name='SemSecPed' className='SemVerm' ></input>
                            <span className="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' name='SemSecPed' className='SemVerd' checked='checked'></input>
                            <span className="checkmark"></span>
                        </label>
                        <div className='FeixasVContainer'>
                            <div className='FaixaV'></div>
                            <div className='FaixaV'></div>
                            <div className='FaixaV'></div>
                            <div className='FaixaV'></div>
                            <div className='FaixaV'></div>
                            <div className='FaixaV'></div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}