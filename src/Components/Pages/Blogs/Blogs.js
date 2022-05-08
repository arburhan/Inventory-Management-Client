import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table'
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
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>sql এর পুর্ন রূপ হল structured query language</td>
                                    <td>nosql এর পুর্নরূপ হল not only structured query language</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                    <td>Non-relational or distributed database system.</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>These databases are not suited for hierarchical data storage.</td>
                                    <td>These databases are best suited for hierarchical data storage.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>These databases are best suited for complex queries</td>
                                    <td>These databases are not so good for complex queries</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Follows ACID property</td>
                                    <td>Follows CAP(consistency, availability, partition tolerance)</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Question #3</Accordion.Header>
                    <Accordion.Body>
                        <h2 className='my-3'>
                            What is the purpose of JWT and how does it work?
                        </h2>
                        jwt হল json web tokens. যা json অবজেক্ট হিসেবে পক্ষগুলির মধ্যে নিরাপদে তথ্য প্রেরনের জন্য একটি কম্প্যাক্ট এবং সয়ংসম্পুর্ন উপায় তৈরি করে । এই তথ্য যাচাই এবং বিশ্বাস করা যেতে পারে কারন এটি ডিজিটাল স্বাক্ষরিত । jwts একটি গোপন algorithm ECDSA or RSA ব্যবহার করে পাবলিক/প্রাইভেট কী জোড়া ব্যবহার করে স্বাক্ষর করা যেতে পারে ।
                        jwt যেভাবে কাজ করেঃ
                        ক্লায়েন্ট সাইডে ইউজার লগইন করার সময় server jwt টোকেন জেনারেট করে । তারপর এই টোকেন সার্ভার রিটার্ন করে । যদি টোকেন মিলে যায় তাহলে তা ভ্যালিড হয় ।
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;