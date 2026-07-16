'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    const backdropRef = useRef<HTMLDivElement>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === backdropRef.current) onClose();
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Mohit_Kumar_Dey_Resume.pdf';
        link.click();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={backdropRef}
                    onClick={handleBackdropClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6"
                    style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 16 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-3xl flex flex-col rounded-2xl overflow-hidden shadow-2xl"
                        style={{
                            background: 'rgba(20, 20, 23, 0.95)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            maxHeight: '90vh',
                        }}
                    >
                        {/* Modal Header */}
                        <div
                            className="flex items-center justify-between px-5 py-4 shrink-0"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                        >
                            {/* Title */}
                            <div className="flex items-center gap-2.5">
                                <FileText size={18} className="text-zinc-400" strokeWidth={1.5} />
                                <span className="text-sm font-medium text-zinc-200 tracking-wide">Resume</span>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3">
                                {/* Download Button */}
                                <motion.button
                                    onClick={handleDownload}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200"
                                    style={{
                                        background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                                        color: '#fff',
                                        boxShadow: '0 0 20px rgba(109,40,217,0.4)',
                                    }}
                                    id="resume-download-btn"
                                    aria-label="Download Resume"
                                >
                                    <Download size={14} strokeWidth={2} />
                                    <span>Download</span>
                                </motion.button>

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="flex items-center justify-center w-8 h-8 rounded-full text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
                                    style={{ background: 'rgba(255,255,255,0.06)' }}
                                    aria-label="Close Resume"
                                    id="resume-modal-close"
                                >
                                    <X size={16} strokeWidth={2} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 overflow-auto" style={{ minHeight: '60vh' }}>
                            <iframe
                                src="/resume.pdf"
                                title="Resume"
                                className="w-full"
                                style={{
                                    height: '75vh',
                                    border: 'none',
                                    background: '#fff',
                                    display: 'block',
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
