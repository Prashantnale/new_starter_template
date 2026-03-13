import React, { useState } from 'react';
import { 
  User, Mail, FileText, Calendar, Tag, Bell, Shield, 
  Send, Save, Trash2, ArrowLeft, ChevronRight, CheckCircle2 
} from 'lucide-react';
import Input from '../components/common/Input';
import TextArea from '../components/common/TextArea';
import Select from '../components/common/Select';
import Checkbox from '../components/common/Checkbox';
import RadioGroup from '../components/common/RadioGroup';
import Switch from '../components/common/Switch';
import DatePicker from '../components/common/DatePicker';
import FileUpload from '../components/common/FileUpload';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { useToast } from '../components/common/Toast';
import Breadcrumbs from '../components/common/Breadcrumbs';

const FormPage = ({ onBack }) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    description: '',
    category: 'development',
    priority: 'medium',
    startDate: '',
    notifications: true,
    terms: false,
    tags: ['react'],
    files: null
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleTagToggle = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag) 
        ? prev.tags.filter(t => t !== tag) 
        : [...prev.tags, tag]
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.description) newErrors.description = "Project description is required";
    if (!formData.terms) newErrors.terms = "You must agree to the terms";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      addToast("Please fix the errors in the form.", "danger");
      return;
    }
    console.log("Form Submitted:", formData);
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      addToast("Project created successfully!", "success");
      console.log("Form Submitted:", formData);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-surface-dark p-4 md:p-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation & Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Button 
                variant="ghost" 
                size="sm" 
                icon={ArrowLeft} 
                onClick={onBack}
                className="text-gray-500"
            >
                Back to Gallery
            </Button>
            <Badge variant="brand" dot>New Project</Badge>
          </div>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '#' },
              { label: 'Projects', href: '#' },
              { label: 'Create New' }
            ]} 
          />
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-gray-100">
            Create New Project
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card title="General Information" subtitle="Basic details about your new initiative">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    label="Project Manager" 
                    name="fullName"
                    icon={User} 
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    error={errors.fullName}
                  />
                  <Input 
                    label="Contact Email" 
                    name="email"
                    icon={Mail} 
                    type="email"
                    placeholder="manager@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                  />
                </div>
                
                <TextArea 
                  label="Project Description" 
                  name="description"
                  placeholder="Describe the goals and scope of this project..."
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  error={errors.description}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select 
                    label="Department" 
                    name="category"
                    options={[
                      { label: 'Development', value: 'development' },
                      { label: 'Design', value: 'design' },
                      { label: 'Marketing', value: 'marketing' },
                      { label: 'Sales', value: 'sales' }
                    ]}
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                  <DatePicker 
                    label="Estimated Start Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </Card>

            <Card title="Project Assets" subtitle="Upload relevant documents and images">
                <FileUpload name="files" label="Project Document" onChange={handleInputChange} />
            </Card>

            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-[32px] border border-gray-100 dark:border-slate-800 shadow-sm">
                <Checkbox 
                  label="I agree to the Terms and Conditions of service" 
                  name="terms"
                  description="By checking this, you accept our data processing agreement."
                  checked={formData.terms}
                  onChange={handleInputChange}
                  error={errors.terms}
                />
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="space-y-6">
            <Card title="Config" noPadding className="overflow-hidden">
                <div className="p-6 space-y-8">
                    <RadioGroup 
                        name="priority"
                        label="Project Priority"
                        options={[
                            { label: 'High Priority', value: 'high' },
                            { label: 'Medium', value: 'medium' },
                            { label: 'Low', value: 'low' }
                        ]}
                        value={formData.priority}
                        onChange={handleInputChange}
                    />

                    <div className="space-y-4">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Labels</label>
                        <div className="flex flex-wrap gap-2">
                            {['react', 'tailwind', 'ui-kit', 'v4', 'enterprise'].map(tag => (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => handleTagToggle(tag)}
                                    className={`
                                        px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all
                                        ${formData.tags.includes(tag) 
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                                            : 'bg-gray-100 dark:bg-slate-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-700'}
                                    `}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Switch 
                        label="Email Alerts" 
                        name="notifications"
                        description="Receive updates on status changes"
                        checked={formData.notifications}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div className="bg-gray-50/50 dark:bg-gray-800/10 p-6 border-t border-gray-100 dark:border-slate-800 space-y-3">
                    <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-full justify-center py-4 rounded-2xl" 
                        icon={Save}
                        loading={loading}
                    >
                        Create Project
                    </Button>
                    <Button 
                        type="button" 
                        variant="ghost" 
                        className="w-full justify-center text-gray-400"
                    >
                        Save as Draft
                    </Button>
                </div>
            </Card>

            <div className="p-6 bg-emerald-50/30 dark:bg-emerald-900/10 border border-emerald-100/50 dark:border-emerald-900/20 rounded-[32px] flex items-start gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-xl text-emerald-600">
                    <Shield size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-400">Secure Form</h4>
                    <p className="text-xs text-emerald-700/70 dark:text-emerald-500/60 mt-0.5 leading-relaxed">
                        Data is encrypted before being sent to the server instance.
                    </p>
                </div>
            </div>
          </div>

        </form>

        <footer className="text-center py-10">
            <p className="text-[10px] font-bold text-gray-300 dark:text-gray-700 uppercase tracking-[0.2em]">
                Premium Design System © 2026
            </p>
        </footer>
      </div>
    </div>
  );
};

export default FormPage;
