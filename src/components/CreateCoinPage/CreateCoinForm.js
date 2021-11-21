import {Form, Input, Button} from 'antd';
import Checkbox from "antd/es/checkbox/Checkbox";
import Switch from "react-switch";
import {useState} from "react";
import React from 'react'

export const CreateCoinForm = ({selectedCrypto}) => {
    const [form] = Form.useForm();
    const [advancedSettings, setAdvancedSettings] = useState(false)
    const onFinish = (values) => {
        const formValues = {...values, selectedCrypto}
        console.log(formValues)
    };
    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };
    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="tokenName"
                       label={<label className="font-bold"><span className="text-red-700">*</span>Token Name</label>}
                       className="grid grid-cols-1 sm:grid-cols-formItem p-4"
                       rules={[{
                           required: true,
                           message: <label className="text-xs text-red-700">Please input a token name</label>
                       }, {
                           whitespace: true, message: <label className="text-xs text-red-700">Please input your
                               symbol</label>
                       }]}>
                <Input placeholder="Token Name"
                       className="w-full col-start-2 col-end-5 p-0.5 rounded focus:outline-none"/>
            </Form.Item>
            <Form.Item name="Symbol"
                       label={<label className="font-bold"><span className="text-red-700">*</span>Symbol</label>}
                       className="grid grid-cols-1 sm:grid-cols-formItem p-4"
                       rules={[{
                           required: true,
                           message: <label className="text-xs text-red-700">Please input your symbol</label>
                       }, {
                           whitespace: true, message: <label className="text-xs text-red-700">Please input your
                               symbol</label>
                       }]}>
                <Input placeholder="Symbol" className="w-full p-0.5 rounded focus:outline-none"/>
            </Form.Item>
            <Form.Item name="initialSupply" label={<label className="font-bold"><span className="text-red-700">*</span>Initial
                Supply</label>} className="grid grid-cols-1 sm:grid-cols-formItem p-4"
                       rules={[{
                           required: true,
                           message: <label className="text-xs text-red-700">Please input your initial supply</label>
                       }, {
                           whitespace: true, message: <label className="text-xs text-red-700">Please input your
                               symbol</label>
                       }]}>
                <Input placeholder="Initial Supply" className="w-full p-0.5 rounded focus:outline-none"/>
            </Form.Item>

            <Form.Item name="decimals"
                       label={<label className="font-bold"><span className="text-red-700">*</span>Decimals <span
                           className="text-xs whitespace-nowrap">(1-18)</span></label>}
                       className="grid grid-cols-1 sm:grid-cols-formItem p-4 break-words"
                       rules={[{
                           required: true,
                           message: <label className="text-xs text-red-700">Please input your decimal</label>,
                       }, {
                           validator: (rule, value, cb) => {
                               value > 18 || value < 1 ? cb("value must be between 1 and 18") : cb();
                           },
                           message: <label className="text-xs text-red-700">Value should be more than 1 and less than
                               18</label>,
                       }]}
            >
                <Input placeholder="0" type="number" step="1" className="w-full p-0.5 rounded focus:outline-none"/>
            </Form.Item>
            <Form.Item name="advancedSettings" label={<label className="font-bold">Advanced Settings</label>}
                       className="px-4" initialValue={advancedSettings} getValueFromEvent={(data) => data}>
                <Switch checked={advancedSettings} className="mt-4" onColor="#4c1d95" onChange={() => {
                    setAdvancedSettings(!advancedSettings)
                }}/>
            </Form.Item>
            {advancedSettings ?
                <Form.Item name="createOwner" rules={[{
                    whitespace: true, message: <label className="text-xs text-red-700">Please input your
                        owner</label>
                }]} label={<label className="font-bold" >Create Owner</label>}
                           className="grid grid-cols-1 sm:grid-cols-formItem p-4">
                    <Input type="text" placeholder="0x111111111111111...."
                           className="w-full p-0.5 rounded focus:outline-none"/>
                </Form.Item> : null}

            <Form.Item name="otherConfig" label={<label className="font-bold">Other Config</label>} className="p-4">

                <Checkbox.Group style={{width: '100%'}} className="grid grid-cols-2">
                    <Checkbox value="canBurn" className="whitespace-nowrap p-2"><span
                        className="ml-4">Can Burn</span></Checkbox>
                    <Checkbox value="canMint" className="whitespace-nowrap p-2"><span
                        className="ml-4">Can Mint</span></Checkbox>
                    <Checkbox value="canPause" className="whitespace-nowrap p-2"><span className="ml-4">Can Pause</span></Checkbox>
                    <Checkbox value="blacklist" className="whitespace-nowrap p-2"><span
                        className="ml-4">Blacklist</span></Checkbox>
                    <Checkbox value="deflation" className="whitespace-nowrap p-2"><span
                        className="ml-4">Deflation</span></Checkbox>
                </Checkbox.Group>
            </Form.Item>
            <Form.Item className="pb-4 pl-4">
                <Button type="primary" htmlType="submit" className="font-bold border border-indigo-900 hover:bg-purple-800 hover:text-gray-50 duration-300 rounded p-2">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
}