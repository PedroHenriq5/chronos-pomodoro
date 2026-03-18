import { toast } from 'react-toastify';

const MessageType = {
    success: (msg: string) => toast.success(msg),
    error: (msg: string) => toast.error(msg),
    warning: (msg: string) => toast.warning(msg),
    info: (msg: string) => toast.info(msg),
    dismiss: () => toast.dismiss(),
} as const;

export default MessageType;