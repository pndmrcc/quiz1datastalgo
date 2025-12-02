import React, { useState } from 'react';
import { Card, Button, Accordion } from 'react-bootstrap';

function FloatingFAQ() {
  const [open, setOpen] = useState(false);

  return (
    <div className='floating-faq'>
      {!open && (
        <Button onClick={() => setOpen(true)} className='faq-toggle btn-primary'>
          FAQ
        </Button>
      )}

      {open && (
        <Card className='faq-card'>
          <Card.Body>
            <div className='d-flex justify-content-between align-items-start'>
              <div>
                <h6 className='mb-1'>FAQ! Need help?</h6>
                <p className='small text-muted mb-2'>Got a question? We've probably answered it here. If not, please send us a message!</p>
              </div>
              <Button variant='light' size='sm' onClick={() => setOpen(false)}>✕</Button>
            </div>

            <Accordion defaultActiveKey='0'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>How far in advance do I need to book the coffee cart?</Accordion.Header>
                <Accordion.Body>
                  We recommend booking at least 2-4 weeks in advance for events. For weekends and peak seasons, book earlier to secure your date.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='1'>
                <Accordion.Header>Can I add more than the 8 included drinks?</Accordion.Header>
                <Accordion.Body>
                  Yes — additional drink options can be added for an extra fee. Contact us with your request and we'll provide a quote.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='2'>
                <Accordion.Header>How long can the coffee cart stay at my event?</Accordion.Header>
                <Accordion.Body>
                  Standard packages cover up to 3 hours. Longer service can be arranged depending on availability.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='3'>
                <Accordion.Header>What happens if I need more than 150 cups?</Accordion.Header>
                <Accordion.Body>
                  For larger requirements we offer bulk options and staffing adjustments. Please contact us to discuss logistics and pricing.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='4'>
                <Accordion.Header>Do you travel outside your service area?</Accordion.Header>
                <Accordion.Body>
                  We may travel for events outside our normal area; additional travel fees may apply. Share your event location for a quote.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='5'>
                <Accordion.Header>How do I confirm my booking?</Accordion.Header>
                <Accordion.Body>
                  Bookings are confirmed with a signed agreement and deposit. Use the contact form or email us to start the reservation process.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className='mt-3 text-center'>
              <small className='text-muted'>Have a Nice Day! </small>
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default FloatingFAQ;
