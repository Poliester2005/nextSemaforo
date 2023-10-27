import { } from 'react'
import './Estados.scss'

export default function Estado1() {
    return (
        <>
            <div >
                <main className='container'>
                    <div></div>
                    <div className='SemSec Meio'>
                        <label>
                            <input type='radio' Name='SemSec' className='SemVerm' checked='checked'></input>
                            <span class="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' Name='SemSec' className='SemAma'></input>
                            <span class="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' Name='SemSec' className='SemVerd'></input>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div></div>
                    <div className='SemPrincPed Meio'>
                        <label>
                            <input type='radio' name='SemPrincPed' className='SemVerm' checked='checked'></input>
                            <span class="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' name='SemPrincPed' className='SemVerd'></input>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className='Meio'></div>
                    <div className='SemPrinc Meio'>
                        <label>
                            <input type='radio' name='SemPrinc' className='SemVerm' ></input>
                            <span class="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' name='SemPrinc' className='SemAma'></input>
                            <span class="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' name='SemPrinc' className='SemVerd' checked='checked'></input>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div></div>
                    <div className='SemSecPed Meio'>
                        
                        <label>
                            <input type='radio' Name='SemSecPed' className='SemVerm' ></input>
                            <span class="checkmark"></span>
                        </label>
                        <label>
                            <input type='radio' Name='SemSecPed' className='SemVerd' checked='checked'></input>
                            <span class="checkmark"></span>
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