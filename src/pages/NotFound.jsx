import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineHome } from 'react-icons/hi';

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <motion.p
        className="font-display text-8xl font-semibold text-gradient"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.p>
      <h1 className="text-2xl font-semibold text-mist-100">Page not found</h1>
      <p className="max-w-sm text-sm text-mist-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        <HiOutlineHome className="h-4 w-4" /> Back to Home
      </Link>
    </section>
  );
}
