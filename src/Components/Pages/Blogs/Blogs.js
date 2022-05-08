import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5 blogs-section'>Blogs</h2>
            <hr />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Question #1</Accordion.Header>
                    <Accordion.Body>
                        <h2 className='my-3'>
                            What is the difference between javascript and nodejs ?
                        </h2>
                        js হল scripting language.যা সাধারণত ওয়েবসাইটে ক্লায়েন্ট পর্যায়ে অর্থাৎ ব্রাউজারে বিহেভিয়ার কন্ট্রোলের লক্ষ্য নিয়ে একে ডিজাইন করা হয়েছে । js একটি high level ও object oriented programming language. বর্তমানে সময় js বেশ জনপ্রিয় language. js সাধারণত রানটাইম এনভাইরনমেন্ট এর উপরে নির্ভর করে (যেমনঃ ব্রাউজার ) objects & methods প্রদান করে যার মাধ্যমে script গুলা এনভাইরনমেন্ট এর সাথে ইন্টারেক্ট করে । যেমন DOM.
                        <hr />
                        nodejs হল ওপেন সোর্স, ক্রস প্লাটফর্ম, back-end javascript runtime environment যা v8 engine এ চলে এবং ব্রাউজারের বাইরে js এর কোড চালনা করে । একটা ওয়েবপেজ এর গঠন দেয়া হয় Html এর মাধ্যমে, আর css এর মাধ্যমে ডিজাইন করা হয়। Html, css আর কিছুই করতে পারে না। যখনই একটা ওয়েবপেজ এর ইন্টারএক্টিভিটি যোগ করতে হয় তখনই প্রয়োজন হয় javascript এর।আর javascript এর দেয়া নির্দেশনা ব্রাউজার এ রান করানোর জন্য ব্রাউজার ঐ কোড রিড করে কমান্ড ফলো করতে হয়।ব্রাউজার javascript এর কোডকে রিড করার জন্য ব্রাউজারের মধ্যে একটা javascript ইঞ্জিন সেট করা থাকে।
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question #2</Accordion.Header>
                    <Accordion.Body>
                        <h2 className='my-3'>
                            What is the differences between sql and nosql databases?
                        </h2>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Question #2</Accordion.Header>
                    <Accordion.Body>
                        <h2 className='my-3'>
                            What is the purpose of JWT and how does it work?
                        </h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;