'use client'
import { Checkbox, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'
import Dropdown from '../components/dropdown'
import { stateList } from '../utils'
import { useState, useEffect, useContext } from 'react'
import validator from 'validator'
import InputMask from 'react-input-mask';
import { ShoppingBagContext } from '../context/ShoppingBagContext'
import Link from 'next/link'

function FormInformation({infoType, isDisabled, classes}){
    return (
        <>
        <Fieldset className={`w-fit space-y-4 bg-white my-2 py-8 ${classes}`} disabled={isDisabled}>
            <Legend className="block font-bold text-xl">
                {infoType} Information
            </Legend>
            <Field>
                <Label className="block">First Name*</Label>
                <Input className="block" required={true} />
            </Field>
            <Field>
                <Label className="block">Last Name*</Label>
                <Input className="block" required={true} />
            </Field>
            <Field>
                <Label className="block">Email*</Label>
                <Input className="block" required={true} />
            </Field>
            <Field>
                <Label className="block">Phone Number*</Label>
                <Input className="block" required={true} />
            </Field>
            <Legend className="block font-bold text-xl">
                {infoType} Address
            </Legend>
            <Field>
                <Label className="block">Address*</Label>
                <Input className="block" required={true} />
            </Field>
            <Field>
                <Label className="block">Address Line 2</Label>
                <Input className="block" />
            </Field>
            <Field>
                <Label className="block">State*</Label>
                <Dropdown list={stateList} required={true} />
            </Field>
            <Field>
                <Label className="block">Zip Code*</Label>
                <Input className="block" required={true} />
            </Field>
        </Fieldset>
        </>
    )
}

function CreditCardInfo(){
    const [enabled, setEnabled] = useState(true)
    const [isHidden, setIsHidden] = useState('hidden');
    const [isDisabled, setIsDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('') 
    const [cardNumber, setCardNumber] = useState("");
    const [expDate, setExpDate] = useState("");
    const [cvv, setCvv] = useState("");
    
  const validateCreditCard = (value) => { 
    
    if (validator.isCreditCard(value)) { 
      setErrorMessage('Valid CreditCard Number') 
    } else { 
      setErrorMessage('Enter valid CreditCard Number!') 
    } 
  } 

  const handleChange = (event) => {
    setCardNumber(event.target.value);
};

const handleExpChange = (event) => {
    setExpDate(event.target.value);
};

const handleCvvChange = (event) => {
    setCvv(event.target.value);
};

    useEffect(() => {
        if(!enabled){
            setIsHidden('');
            setIsDisabled(false);
        }
        else{
            setIsHidden('hidden');
            setIsDisabled(true);
        }
    },[enabled])

    return(
        <>
            <Fieldset className="w-fit space-y-4 bg-white rounded-lg my-2 py-8">
                <Legend className="block font-bold text-xl">
                    Card Information
                </Legend>
                <Field className="block">
                    <Label className="block">Card Number*</Label>
                    <InputMask
                    mask="9999 9999 9999 9999"
                    value={cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456">
                        {(inputProps) => <Input className="block" {...inputProps} type="text" required={true} />}
                    {/* <Input className="block" onChange={(e) => validateCreditCard(e.target.value)}/> */}
                    </InputMask>
                    <span className='text-red-600 text-sm'>{errorMessage}</span>
                </Field>
                <div className='flex flex-row'>
                    <Field className="">
                        <Label className="block">Expiration Date*</Label>
                        <InputMask
                        mask="99 \ 99"
                        value={expDate}
                        onChange={handleExpChange}
                        placeholder="01 / 23">
                            {(inputProps) => <Input className="block max-w-36" {...inputProps} type='text' required={true}/>}
                        </InputMask>
                    </Field>
                    <Field className="mx-2 ">
                        <Label className="block">CVV*</Label>
                        <InputMask
                        mask="9999"
                        value={cvv}
                        onChange={handleCvvChange}
                        placeholder="123">
                            {(inputProps) => <Input className="block max-w-36" {...inputProps} type='text' required={true}/>}
                        </InputMask>
                    </Field>
                </div>
                <Legend className="block font-bold text-xl">
                    Billing Address
                </Legend>
                <Field>
                    <Label className="my-2 block">Same as shipping</Label>
                    <Checkbox checked={enabled} onChange={setEnabled} className="group inline-block size-4 rounded border border-black/50 bg-white data-[checked]:bg-blue-700" />
                </Field>
                    <FormInformation infoType={"Billing"} isDisabled={isDisabled} classes={`${isHidden}`}/>
            </Fieldset>
        </>
    )
}

export default function Page(){
    const { subTotal, bagItems } = useContext(ShoppingBagContext);

    return(
        <div className='flex flex-row justify-evenly mb-2 px-4'>
        <section className='flex flex-col text-black space-y-2 mb-2'>
            <p className='text-3xl text-black'>Please fill out the form fields to complete your order</p>
            <p className='text-slate-600'>*Indicates required fields</p>
        <form className='flex flex-row' method="post" action="/checkout/order/success">
        <section className='flex flex-col'>

            <p className='px-8 mt-4 font-bold text-3xl text-black'>Shipping</p>
            <div className='mx-8 px-16 bg-white border rounded-lg'>
                <FormInformation />
            </div>
        </section>
        <section className='flex flex-col'>
            <p className='px-8 mt-4 font-bold text-3xl text-black'>Billing</p>
            <div className='mx-8 px-16 w-fit bg-white border rounded-lg'>
                <CreditCardInfo />
            </div>
        </section>
        <section className='flex flex-col min-w-1/3 space-y-2 px-4 mt-4 text-neutral-700 right-0'>
            <h1 className='font-bold text-2xl'>Order Overview</h1>
            <div className='flex flex-row justify-between'>
                <p className='font-semibold text-sm'>Subtotal</p>
                <p className='font-semibold text-sm'>${subTotal}</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='font-semibold text-sm'>Estimated shipping</p>
                <p className='font-semibold text-sm'>free</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='font-semibold text-sm'>Estimated Tax</p>
                <p className='font-semibold text-sm'>${(subTotal*.08).toFixed(2)}</p>
            </div>
            <hr className='border-neutral-700'></hr>
            <div className='flex flex-row justify-between pt-2 text-neutral-950'>
                <p className='font-semibold text-sm'>Total</p>
                <p className='font-semibold text-sm'>${(subTotal*.08 + subTotal).toFixed(2)}</p>
            </div>
            <Link href="/bag" className='text-black underline text-sm hover:font-bold'>Edit Order</Link>
            <button className="border rounded-full text-neutral-50 font-semi-bold bg-zinc-950 p-2 px-4 mt-4 hover:bg-zinc-700" type='submit'>Place Order</button>

        </section>
        </form>
        </section>
        </div>
    )
}