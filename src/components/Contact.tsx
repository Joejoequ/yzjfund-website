import React, {useState} from "react";
import {useTranslation} from 'react-i18next';

function Contact() {

    const {t} = useTranslation();
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const data = {
            name,
            phone,
            message,
        };

        try {

            const response = await fetch('https://api.yzjfund.com/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });


            if (response.ok) {
                alert(t('contact-text-1'));
                setName('');
                setPhone('');
                setMessage('');
            } else {
                alert(t('contact-text-2'));
            }


        } catch (error) {
            alert(t('contact-text-3'));
            console.error('网络错误', error);
        }
    }


    return (<div
        className="container-fluid bg-light overflow-hidden px-lg-0"
        style={{margin: "6rem 0"}}
        id="contact"
    >
        <div className="container contact px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div
                    className="col-lg-6 contact-text py-5 wow fadeIn"
                    data-wow-delay="0.5s"
                >
                    <div className="p-lg-5 ps-lg-0">
                        <div className="text-start">
                            <h1 className="display-5 mb-4">{t('contact-text-4')}</h1>
                        </div>
                        <form id="form_ch" onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            required={true}
                                            id="name"
                                            placeholder={t('contact-text-5')}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <label htmlFor="name">{t('contact-text-5')}</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            required={true}
                                            id="phone"
                                            placeholder={t('contact-text-6')}
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <label htmlFor="phone">{t('contact-text-6')}</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                  <textarea
                      className="form-control"
                      required={true}
                      placeholder={t('contact-text-7')}
                      id="message"
                      value={message}
                      style={{height: 100}}

                      onChange={(e) => setMessage(e.target.value)}
                  />
                                        <label htmlFor="message">{t('contact-text-7')}</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">
                                        {t('contact-text-8')}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0" style={{minHeight: 400}}>
                    <div className="position-relative h-100">
                        <div id="wrap" className="my-map">
                            <div id="mapContainer"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}


export default Contact;