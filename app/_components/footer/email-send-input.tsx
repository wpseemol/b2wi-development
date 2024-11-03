import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaTelegramPlane } from 'react-icons/fa';

export default function EmailSendButton() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2 mx-auto md:mx-0">
            <Input
                type="email"
                placeholder="Enter Email Address"
                className="p-4 py-6 border-primaryColor rounded-sm focus-visible:ring-0 "
            />
            <Button
                type="submit"
                className="bg-primaryColor/85 hover:bg-primaryColor text-white ring-primaryColor py-6 text-2xl">
                <FaTelegramPlane />
            </Button>
        </div>
    );
}
