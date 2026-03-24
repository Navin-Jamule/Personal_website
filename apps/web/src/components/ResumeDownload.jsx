import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

const ResumeDownload = ({ variant = "default", className = "" }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate PDF generation/fetch
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'data:application/pdf;base64,JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nDPQM1Qo5ypUMFAwALJMLU31jBQsTAz1LBSKikpzUvOSU1P1UhJLEvWS83MTc1O5igE+OQp2CmVuZHN0cmVhbQplbmRvYmoKCjMgMCBvYmoKNDYKZW5kb2JqCgo0IDAgb2JqCjw8L1R5cGUvUGFnZS9NZWRpYUJveFswIDAgNTk1LjI3NiA4NDEuODldL1Jlc291cmNlczw8L0ZvbnQ8PC9GMCA1IDAgUj4+Pj4vQ29udGVudHMgMiAwIFIvUGFyZW50IDYgMCBSPj4KZW5kb2JqCgo1IDAgb2JqCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1R5cGUxL0Jhc2VGb250L0hlbHZldGljYT4+CmVuZG9iagoKNiAwIG9iago8PC9UeXBlL1BhZ2VzL0tpZHNbNCAwIFJdL0NvdW50IDE+PgplbmRvYmoKCjEgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDYgMCBSPj4KZW5kb2JqCgo3IDAgb2JqCjw8L1Byb2R1Y2VyKEdvc2NyaXB0KS9DcmVhdGlvbkRhdGUoRDoyMDI0MDEwMTAwMDAwMFopPj4KZW5kb2JqCgp4cmVmCjAgOAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAyNDUgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMTMyIDAwMDAwIG4gCjAwMDAwMDAxNTEgMDAwMDAgbiAKMDAwMDAwMDI4OCAwMDAwMCBuIAowMDAwMDAwMzQ1IDAwMDAwIG4gCjAwMDAwMDA0MDMgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDgvUm9vdCAxIDAgUi9JbmZvIDcgMCBSPj4Kc3RhcnR4cmVmCjQ5NQolJUVPRgo=';
      link.download = 'Navin_Jamule_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <Button
      variant={variant}
      className={`gap-2 transition-all duration-300 active:scale-95 ${className}`}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
      {isDownloading ? 'Preparing...' : 'Download Resume'}
    </Button>
  );
};

export default ResumeDownload;