import React from 'react';
import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
  Tailwind,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  company: string;
  country: string;
  productInterest: string;
  message: string;
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  company,
  country,
  productInterest,
  message,
}) => {
  return (
    <Html lang="en">
       <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#007291',
              },
            },
          },
        }}
      >
        <Body style={{ backgroundColor: '#f4f4f7', fontFamily: 'Arial, sans-serif' }}>
          <Container style={container}>
            <Heading style={heading}>New Contact Form Inquiry</Heading>
            <Text style={paragraph}>
              You have received a new message from your website contact form.
            </Text>
            <Hr style={hr} />
            <Section>
              <Text style={itemTitle}>Name:</Text>
              <Text style={itemValue}>{name}</Text>

              <Text style={itemTitle}>Email Address:</Text>
              <Text style={itemValue}>{email}</Text>

              <Text style={itemTitle}>Company:</Text>
              <Text style={itemValue}>{company}</Text>

              <Text style={itemTitle}>Country:</Text>
              <Text style={itemValue}>{country}</Text>

              <Text style={itemTitle}>Product of Interest:</Text>
              <Text style={itemValue}>{productInterest}</Text>

              <Text style={itemTitle}>Message:</Text>
              <Text style={itemValue}>{message}</Text>
            </Section>
            <Hr style={hr} />
            <Text style={footer}>
              This email was sent from the J&G Exports website.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const container = {
  margin: '0 auto',
  padding: '20px',
  width: '580px',
  backgroundColor: '#ffffff',
  border: '1px solid #dddddd',
  borderRadius: '10px',
};

const heading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.4',
  color: '#484848',
};

const itemTitle = {
    fontSize: '16px',
    lineHeight: '1.4',
    color: '#484848',
    fontWeight: 'bold' as const,
    marginBottom: '2px',
};

const itemValue = {
    fontSize: '16px',
    lineHeight: '1.4',
    color: '#666666',
    marginTop: '0px',
    paddingLeft: '10px',
    borderLeft: '3px solid #eeeeee'
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};

export default ContactFormEmail;
