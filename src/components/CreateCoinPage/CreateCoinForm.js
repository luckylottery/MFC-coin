import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import Switch from "react-switch";
import "../../css/antdOverwrite.css";
import { CustomInput } from "./CustomInput";
import { LpSwapOptions } from "./CustomSelect";
import { Loader } from "./Loader";
import { TaxReceiveAdress } from "./TaxReceiveAdress";
import { checkAddress } from "../../Utils/walletMainHandler";
export const CreateCoinForm = ({ selectedCrypto }) => {
  const [form] = Form.useForm();
  const [advancedSettings, setAdvancedSettings] = useState(false);
  const [deflation, setDeflation] = useState(false);
  const [holdersRewardFee] = useState(true);
  const [automaticLp] = useState(true);
  const [loader, setLoader] = useState(false);

  const onFinish = (values) => {
    const formValues = { ...values, selectedCrypto };
    console.log(formValues);
    const dummyPromise = new Promise((resolve, reject) => {
      setLoader(true);
      setTimeout(() => {
        resolve();
      }, 5000);
    });
    dummyPromise.then(() => setLoader(false));
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  function decimalValidator(value, onChange) {
    if ((value >= 1 && value <= 18) || !value) {
      onChange(value);
    }
  }

  function initialSupplyValidator(value, onChange) {
    if (value?.length <= 14) {
      onChange(value);
    }
  }

  function handleFormValuesChange(changedValues) {
    if (changedValues?.otherConfig) {
      if (changedValues?.otherConfig?.includes("deflation")) {
        setDeflation(true);
      } else {
        setDeflation(false);
      }
    }
  }

  return (
    <>
      <Loader trigger={loader} />
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        onValuesChange={handleFormValuesChange}
      >
        <Form.Item
          name="tokenName"
          label={<label className="font-bold text-sm">Token Name</label>}
          className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
          rules={[
            {
              required: true,
              message: (
                <label className="text-xs text-red-700">
                  Please input a token name
                </label>
              ),
            },
            {
              whitespace: true,
              message: (
                <label className="text-xs text-red-700">
                  Please input your symbol
                </label>
              ),
            },
          ]}
        >
          <Input className="w-full col-start-2 col-end-5 p-0.5 rounded focus:outline-none" />
        </Form.Item>
        <Form.Item
          name="Symbol"
          label={<label className="font-bold text-sm">Symbol</label>}
          className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
          rules={[
            {
              required: true,
              message: (
                <label className="text-xs text-red-700">
                  Please input your symbol
                </label>
              ),
            },
            {
              whitespace: true,
              message: (
                <label className="text-xs text-red-700">
                  Please input your symbol
                </label>
              ),
            },
          ]}
        >
          <Input className="w-full p-0.5 rounded focus:outline-none" />
        </Form.Item>
        <Form.Item
          name="initialSupply"
          label={<label className="font-bold text-sm">Initial Supply</label>}
          className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
          rules={[
            {
              required: true,
              message: (
                <label className="text-xs text-red-700">
                  Please input your initial supply
                </label>
              ),
            },
            {
              whitespace: true,
              message: (
                <label className="text-xs text-red-700">
                  Please input your symbol
                </label>
              ),
            },
          ]}
        >
          <CustomInput validator={initialSupplyValidator} type={"text"} />
        </Form.Item>

        <Form.Item
          name="decimals"
          label={
            <label className="font-bold text-sm">
              Decimals <span className="text-xs whitespace-nowrap">(1-18)</span>
            </label>
          }
          className="grid grid-cols-1 sm:grid-cols-formItem p-4 break-words text-blue-2"
          rules={[
            {
              required: true,
              message: (
                <label className="text-xs text-red-700">
                  Please input your decimal
                </label>
              ),
            },
          ]}
        >
          <CustomInput validator={decimalValidator} type={"number"} />
        </Form.Item>
        <Form.Item
          name="advancedSettings"
          label={<label className="font-bold text-sm">Advanced Settings</label>}
          className="px-4 text-blue-2"
          initialValue={advancedSettings}
          getValueFromEvent={(data) => data}
        >
          <Switch
            checked={advancedSettings}
            className="mt-4"
            handleDiameter={20}
            uncheckedIcon={null}
            checkedIcon={null}
            onColor="#7280bc"
            offColor="#e4e9ff"
            offHandleColor="#405cd0"
            onHandleColor="#e4e9ff"
            onChange={() => {
              setAdvancedSettings(!advancedSettings);
            }}
          />
        </Form.Item>
        {advancedSettings ? (
          <Form.Item
            name="createOwner"
            rules={[
              {
                whitespace: true,
                message: (
                  <label className="text-xs text-red-700">
                    Please input your owner
                  </label>
                ),
              },
            ]}
            label={
              <label className="font-bold text-blue-2 text-sm">
                Create Owner
              </label>
            }
            className="grid grid-cols-1 sm:grid-cols-formItem p-4"
          >
            <Input
              type="text"
              className="w-full p-0.5 rounded focus:outline-none"
            />
          </Form.Item>
        ) : null}

        <Form.Item
          name="otherConfig"
          label={<label className="font-bold text-sm">Other Config</label>}
          className="p-4 text-blue-2"
        >
          <Checkbox.Group
            style={{ width: "100%" }}
            className="grid grid-cols-2"
          >
            <Checkbox value="deflation" className="whitespace-nowrap p-2">
              <span className="ml-4">Deflation</span>
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        {deflation ? (
          <>
            <Form.Item
              name="transactionTax"
              label={
                <label className="font-bold text-sm">Transaction Tax:</label>
              }
              className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
              rules={[
                {
                  required: true,
                  message: (
                    <label className="text-xs text-red-700">
                      Input required
                    </label>
                  ),
                },
                {
                  whitespace: true,
                  message: (
                    <label className="text-xs text-red-700">
                      Input required
                    </label>
                  ),
                },
              ]}
            >
              <Input className="w-full col-start-2 col-end-5 p-0.5 rounded focus:outline-none" />
            </Form.Item>
            <Form.Item
              name="taxReceiveAddress"
              label={
                <label className="font-bold text-sm">
                  Tax Receive address:
                </label>
              }
              className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
              rules={[
                {
                  required: true,
                  message: (
                    <label className="text-xs text-red-700">
                      Input required
                    </label>
                  ),
                },
                {
                  whitespace: true,
                  message: (
                    <label className="text-xs text-red-700">
                      Input required
                    </label>
                  ),
                },
              ]}
            >
              <TaxReceiveAdress />
            </Form.Item>
            <Form.Item
              name="burnFee"
              label={<label className="font-bold text-sm">Burn fee:</label>}
              className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
              rules={[
                {
                  required: true,
                  message: (
                    <label className="text-xs text-red-700">
                      Input required
                    </label>
                  ),
                },
                {
                  whitespace: true,
                  message: (
                    <label className="text-xs text-red-700">
                      Input required
                    </label>
                  ),
                },
              ]}
            >
              <Input className="w-full col-start-2 col-end-5 p-0.5 rounded focus:outline-none" />
            </Form.Item>

            <Form.Item
              name="holdersRewardFee"
              label={
                <label className="font-bold text-sm">Holders reward fee:</label>
              }
              className="text-blue-2  grid grid-cols-1 sm:grid-cols-formItem p-4 items-center"
              initialValue={advancedSettings}
              getValueFromEvent={(data) => data}
            >
              <Switch
                checked={holdersRewardFee}
                className="mt-4"
                handleDiameter={20}
                uncheckedIcon={null}
                checkedIcon={null}
                onColor="#7280bc"
                offColor="#e4e9ff"
                offHandleColor="#405cd0"
                onHandleColor="#e4e9ff"
              />
            </Form.Item>
            {holdersRewardFee ? (
              <Form.Item
                name="holdersRewardFeeInput"
                label={
                  <label className="font-bold text-sm">
                    Holders reward fee:
                  </label>
                }
                className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
                rules={[
                  {
                    required: true,
                    message: (
                      <label className="text-xs text-red-700">
                        Input required
                      </label>
                    ),
                  },
                  {
                    whitespace: true,
                    message: (
                      <label className="text-xs text-red-700">
                        Input required
                      </label>
                    ),
                  },
                ]}
              >
                <Input
                  type="number"
                  className="w-full col-start-2 col-end-5 p-0.5 rounded focus:outline-none"
                />
              </Form.Item>
            ) : null}
            <Form.Item
              name="automaticLp"
              label={<label className="font-bold text-sm">Automatic LP:</label>}
              className="text-blue-2 grid grid-cols-1 sm:grid-cols-formItem pl-4 items-center"
              getValueFromEvent={(data) => data}
            >
              <Switch
                checked={automaticLp}
                className="mt-4"
                handleDiameter={20}
                uncheckedIcon={null}
                checkedIcon={null}
                onColor="#7280bc"
                offColor="#e4e9ff"
                offHandleColor="#405cd0"
                onHandleColor="#e4e9ff"
              />
            </Form.Item>
            {automaticLp ? (
              <>
                <Form.Item
                  name="automaticLpInput"
                  label={
                    <label className="font-bold text-sm">Automatic LP:</label>
                  }
                  className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
                  rules={[
                    {
                      required: true,
                      message: (
                        <label className="text-xs text-red-700">
                          Input required
                        </label>
                      ),
                    },
                    {
                      whitespace: true,
                      message: (
                        <label className="text-xs text-red-700">
                          Input required
                        </label>
                      ),
                    },
                  ]}
                >
                  <Input
                    type="number"
                    className="w-full col-start-2 col-end-5 p-0.5 rounded focus:outline-none"
                  />
                </Form.Item>
                <Form.Item
                  name="transactionTaxSelect"
                  label={
                    <label className="font-bold text-sm">
                      Transaction Tax:
                    </label>
                  }
                  className="grid grid-cols-1 sm:grid-cols-formItem p-4 text-blue-2"
                  rules={[
                    {
                      required: true,
                      message: (
                        <label className="text-xs text-red-700">
                          Input required
                        </label>
                      ),
                    },
                    {
                      whitespace: true,
                      message: (
                        <label className="text-xs text-red-700">
                          Input required
                        </label>
                      ),
                    },
                  ]}
                >
                  <LpSwapOptions />
                </Form.Item>
              </>
            ) : null}
          </>
        ) : null}

        <Form.Item className="pb-4 pl-4">
          <Button
            type="primary"
            htmlType="submit"
            className="font-bold text-red bg-red-secondary border-2 border-red-primary duration-300 rounded p-2"
            style={{
              borderBottom: "4px solid #ec2028",
              borderRadius: "15px",
            }}
            disabled={loader}

            /*
            name,
      symbol,
      decimals,
      supply,
      txfee,
      lpfee,
      dexfee,
      router,
      feeaddress,
      tokenOwner
            */
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
