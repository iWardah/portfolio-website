import Link from "@/components/Shared/Link";

const Contact = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>

      <p className="text-lg font-normal text-gray-100">
        You can send me over an e-mail on{" "}
        <Link
          href="mailto:ijazwardah8@gmail.com"
          className="text-blue-400 hover:!text-blue-300"
        >
          ijazwardah8@gmail.com
        </Link>
      </p>
    </div>
  );
};

export default Contact;
