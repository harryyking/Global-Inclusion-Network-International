import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,name
}) => (
  <div className='space-y-2 p-2'>
    <h1>Hello {name},</h1>
    <p>{message}</p>
  </div>
);
