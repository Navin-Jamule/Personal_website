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
      link.href = 'https://drive.google.com/file/d/1eQCB6aPQjkB26ERZ2jzMcnlW5rzG1g41/view?usp=sharing'
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