export default function HelpCategory() {
    return (
        <section className="container mx-auto md:mb-16 mb-14">
            {/* <div>
                <h3></h3>
            </div> */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4">
                {testArray.map((item) => (
                    <div key={item}>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Eligendi, alias sit itaque quod, consequatur
                            consequuntur quam odio odit, a voluptas iure enim
                            sint. Eveniet debitis consequuntur aliquid tempora
                            exercitationem vero!
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const testArray = [1, 2, 3, 4, 5];
