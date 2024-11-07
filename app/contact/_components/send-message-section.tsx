export default function SendMessageSection() {
    return (
        <div className=" col-span-2  h-full p-5 pb-0 ">
            <h2 className="text-3xl font-bold mb-4 text-neutral-800/85 ">
                Send A Message
            </h2>
            <form action="" className="grid grid-cols-2 gap-x-4 gap-y-8">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="border focus-visible:outline-none p-3"
                    required
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="border focus-visible:outline-none p-3"
                    required
                />
                <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Phone Number"
                    className="border focus-visible:outline-none p-3"
                    required
                />
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="border focus-visible:outline-none p-3"
                    required
                />
                <textarea
                    name="your-message"
                    id="your-message"
                    placeholder="Your Message"
                    rows={4}
                    cols={50}
                    required
                    className="col-span-2 border focus-visible:outline-none p-3"></textarea>
                <button
                    type="submit"
                    className="col-span-2 border focus-visible:outline-none bg-primaryColor text-white py-3 font-medium ">
                    Submit
                </button>
            </form>
        </div>
    );
}
