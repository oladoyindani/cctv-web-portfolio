// src/pages/Contacts.js
import React from 'react';

function Contacts() {
  return (
    <div className="container section" dir="rtl">
      <h1 className="mb-4">اتصل بنا</h1>
      <p>
        مرحباً بكم في صفحة الاتصال الخاصة بنا. نحن هنا للإجابة على أسئلتكم وتقديم المساعدة.
      </p>
      <p>
        البريد الإلكتروني: <a href="mailto:manifesotrading@outlook.com">manifesotrading@outlook.com</a>
      </p>
      <p>
        الهاتف: <a href="tel:+97450581621">+974 5958 1621</a>
      </p>
      <p>
        العنوان: الدوحة، قطر: <a href='https://goo.gl/maps/7Z3Zz9z1ZTz' target='_blank' rel='noreferrer'>C.R.No:204728, Doha-Qatar</a>
      </p>
    </div>
  );
}

export default Contacts;
