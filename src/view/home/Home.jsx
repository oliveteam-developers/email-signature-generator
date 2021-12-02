import React, { Fragment, useState } from 'react';
import { Input, Button, message } from 'antd';

import './Home.scss';

const Home = () => {
  const [data, setData] = useState({
    name: 'Duong Kien',
    title: 'Founder & CEO',
    phoneNumber: '(84) 93429 9871',
    email: 'ceo@olive-team.dev',
    address: 'London, UK'
  });

  const handleChange = (e, type) => {
    const info = data;
    info[type] = e.target.value;
    setData({
      ...data,
      info
    });
  };

  const copy = () => {
    const copyText = document.querySelector('#signature-content');
    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      const status = document.execCommand('copy');
      if (status) {
        message.success('Copy successfully');
      } else {
        message.error('Copy failed');
      }
    } catch (e) {
      console.log(e);
      message.error('Copy failed');
    }
  };

  return (
    <Fragment>
      <div className="home-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="title">Email Signature Generator</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-12">
              <form>
                <div className="item">
                  <h3>Name</h3>
                  <Input onChange={(e) => handleChange(e, 'name')} value={data.name} />
                </div>

                <div className="item">
                  <h3>Title</h3>
                  <Input onChange={(e) => handleChange(e, 'title')} value={data.title} />
                </div>

                <div className="item">
                  <h3>Phone number</h3>
                  <Input onChange={(e) => handleChange(e, 'phoneNumber')} value={data.phoneNumber} />
                </div>

                <div className="item">
                  <h3>Email</h3>
                  <Input onChange={(e) => handleChange(e, 'email')} value={data.email} />
                </div>

                <div className="item">
                  <h3>Address</h3>
                  <Input onChange={(e) => handleChange(e, 'address')} value={data.address} />
                </div>
              </form>

              <div className="copy-btn">
                <Button type="primary" onClick={copy}>Copy Signature</Button>
              </div>
            </div>

            <div className="col-md-6 col-12" id="signature-content">
              <table className="table-detail">
                <tbody>
                  <tr>
                    <td>
                      <div className="logo">
                        <img alt="" src="https://olive-software-company.s3.ap-southeast-1.amazonaws.com/logo/logo-200x181.png" />
                      </div>
                    </td>

                    <td>
                      <div className="detail">
                        <h1>{data.name}</h1>
                        <h2>{data.title}</h2>
                      </div>

                      <table className="table-info">
                        <tbody>
                          <tr>
                            <td>Phone:</td>
                            <td>{data.phoneNumber}</td>
                          </tr>

                          <tr>
                            <td>Email:</td>
                            <td>{data.email}</td>
                          </tr>

                          <tr>
                            <td>Website:</td>
                            <td>
                              <a href="https://www.olive-team.dev/">www.olive-team.dev</a>
                            </td>
                          </tr>

                          <tr>
                            <td>Address:</td>
                            <td>{data.address}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="social-links">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/olivesoftware">
                              <img alt="" src="https://olive-software-company.s3.ap-southeast-1.amazonaws.com/icons/facebook-20_20.png" />
                            </a>
                          </li>

                          <li>
                            <a href="https://www.linkedin.com/company/olive-team">
                              <img alt="" src="https://olive-software-company.s3.ap-southeast-1.amazonaws.com/icons/linkedIn-20_20.png" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="warning">
                <tbody>
                  <tr>
                    <td>
                      The content of this email is confidential and intended for the recipient specified in the message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
