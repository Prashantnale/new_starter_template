import React, { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import TextArea from '../components/common/TextArea';
import Select from '../components/common/Select';
import Checkbox from '../components/common/Checkbox';
import RadioGroup from '../components/common/RadioGroup';
import Switch from '../components/common/Switch';
import DatePicker from '../components/common/DatePicker';
import FileUpload from '../components/common/FileUpload';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Table from '../components/common/Table';
import Skeleton from '../components/common/Skeleton';
import Modal from '../components/common/Modal';
import ConfirmModal from '../components/common/ConfirmModal';
import Alert from '../components/common/Alert';
import Tooltip from '../components/common/Tooltip';
import Avatar from '../components/common/Avatar';
import Tabs from '../components/common/Tabs';
import Accordion from '../components/common/Accordion';

import { useToast } from '../components/common/Toast';
import ThemeToggle from '../components/common/ThemeToggle';
import Pagination from '../components/common/Pagination';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ProgressBar from '../components/common/ProgressBar';
import Drawer from '../components/common/Drawer';
import EmptyState from '../components/common/EmptyState';
import NotFound from '../components/common/NotFound';


import { 
  User, Mail, Lock, Code, Eye, Layers, Send, Trash, Plus, Settings, 
  MessageSquare, List, CheckSquare, Radio, ToggleLeft, Calendar, FileUp, Info, Table as TableIcon, Layout, PieChart,
  BellRing, HelpCircle, LogOut, Database, CheckCircle, AlertTriangle, XCircle, Bell, Heart, UserCircle, MoveRight,
  ChevronRight, BarChart3, PanelRight, MousePointer2, RefreshCcw
} from 'lucide-react';


const ComponentShowcase = () => {
  // States for interactive components
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('apple');
  const [switchValue, setSwitchValue] = useState(true);
  const [dateValue, setDateValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [progressValue, setProgressValue] = useState(65);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNotFoundPreview, setIsNotFoundPreview] = useState(false);
  const [selectValue, setSelectValue] = useState('in');

  const { addToast } = useToast();





  return (
    <div className="min-h-screen bg-gray-50 dark:bg-surface-dark text-gray-900 dark:text-gray-100 p-4 md:p-10 font-sans transition-colors duration-500">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-brand-600">
              <Layers size={32} className="animate-pulse" />
              <span className="font-black text-2xl tracking-tight uppercase">Starter Design System</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Component Gallery</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
              A collection of premium, reusable components built with React and Tailwind CSS v4. 
              Styled for modern aesthetics and accessibility.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:block">Switch Theme</span>
            <ThemeToggle />
          </div>
        </header>

        <hr className="border-gray-200 dark:border-gray-800" />

        {/* --- FORMATTING HELPER --- */}
        <div className="p-4 bg-brand-50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-900/20 rounded-2xl flex items-center gap-3 text-brand-700 dark:text-brand-400">
            <Info size={18} />
            <p className="text-xs font-medium">This gallery showcase Batch 1, 2, 3, 4 & 5 components.</p>
        </div>


        {/* Section: Feedback & Overlays */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <BellRing size={20} />
              <h2 className="text-xl font-bold uppercase tracking-widest">Feedback & Overlays</h2>
            </div>
            <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 text-[10px] font-bold rounded uppercase">Batch 3</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
                <Alert variant="info" title="Deployment Status">
                    Your application is currently being deployed to production.
                </Alert>
                <Alert variant="success" title="Perfect Check!">
                    All security protocols passed. Your system is safe.
                </Alert>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-transparent rounded-3xl border border-gray-100 dark:border-gray-800">
                    <Tooltip content="Reset all settings" position="top">
                        <Button variant="ghost" size="sm" icon={Settings}>Hover Me</Button>
                    </Tooltip>
                    <Tooltip content="Need help?" position="right">
                        <HelpCircle className="text-gray-400 cursor-help" size={20} />
                    </Tooltip>
                </div>
            </div>

            <Card className="flex flex-col items-center justify-center p-12 text-center bg-brand-50/20 dark:bg-brand-900/5">
                <PieChart size={48} className="text-brand-500 mb-4 opacity-50" />
                <h3 className="font-bold text-lg mb-2">Overlay Demonstration</h3>
                <p className="text-sm text-gray-400 mb-6 max-w-[200px]">Click the button to experience our premium modal system.</p>
                <Button variant="primary" icon={Layers} onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            </Card>
          </div>

          <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title="System Configuration"
            footer={
                <>
                    <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    <Button variant="danger" icon={LogOut}>Logout</Button>
                </>
            }
          >
            <div className="space-y-6">
                <Alert variant="warning">Are you sure you want to proceed with system logout? All unsaved data will be lost.</Alert>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Session ID</span>
                        <span className="text-sm font-mono tracking-tighter text-brand-600">ST-882-XQ-09</span>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Uptime</span>
                        <span className="text-sm font-mono tracking-tighter text-emerald-600">247:12:09</span>
                    </div>
                </div>
            </div>
          </Modal>

          {isNotFoundPreview && (
            <div className="fixed inset-0 z-[100] overflow-y-auto">
              <NotFound onBackHome={() => setIsNotFoundPreview(false)} />
            </div>
          )}
        </section>


        {/* Section: Layout Components (Cards) */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Layout size={20} />
              <h2 className="text-xl font-bold uppercase tracking-widest">Cards & Layout</h2>
            </div>
            <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 text-[10px] font-bold rounded uppercase">Batch 2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card 
              title="Project Analytics" 
              subtitle="Monthly performance metrics"
              hoverable
              headerAction={<Button size="sm" variant="ghost" icon={Plus} />}
              footer={<div className="flex justify-between items-center text-xs text-gray-400"><span>Updated 2m ago</span> <Badge variant="success">Live</Badge></div>}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Revenue</span>
                  <span className="font-bold text-emerald-500">+$12,400</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[70%]" />
                </div>
              </div>
            </Card>

            <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">Active</Badge>
                    <Badge variant="success" dot>Success</Badge>
                    <Badge variant="warning">Pending</Badge>
                    <Badge variant="danger">Error</Badge>
                    <Badge variant="neutral">Draft</Badge>
                    <Badge variant="brand">Premium</Badge>
                </div>
                <Card noPadding bordered={false} className="bg-gray-50/50 dark:bg-gray-900/50 p-6">
                    <div className="flex items-center gap-4">
                        <Skeleton variant="circular" width={50} height={50} />
                        <div className="flex-1 space-y-2">
                            <Skeleton variant="text" width="40%" />
                            <Skeleton variant="text" width="80%" />
                        </div>
                    </div>
                </Card>
            </div>
          </div>
        </section>

        {/* Section: Batch 5 - Navigation & Utilities */}
        <section className="space-y-12">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border-b border-gray-100 dark:border-gray-800 pb-4">
            <MoveRight size={24} />
            <h2 className="text-xl font-bold uppercase tracking-widest">Batch 5: Navigation & Feedback</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pagination & Breadcrumbs */}
            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-10">
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Breadcrumbs</h3>
                <Breadcrumbs 
                  items={[
                    { label: 'Home', href: '#' },
                    { label: 'Components', href: '#' },
                    { label: 'Navigation' }
                  ]} 
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Interactive Pagination</h3>
                <Pagination 
                  currentPage={currentPage}
                  totalPages={12}
                  onPageChange={setCurrentPage}
                />
                <p className="text-[10px] text-gray-400 font-medium">Viewing page {currentPage} of 12</p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Status Indicators</h3>
                <Button 
                  size="xs" 
                  variant="ghost" 
                  icon={RefreshCcw}
                  onClick={() => setProgressValue(Math.floor(Math.random() * 100))}
                >
                  Randomize
                </Button>
              </div>
              
              <ProgressBar label="Storage Limit" value={progressValue} showPercentage variant="primary" />
              <ProgressBar label="System Health" value={92} variant="success" size="sm" />
              <ProgressBar label="Critical Load" value={85} variant="danger" size="lg" />
            </div>
          </div>

          {/* Drawer & Empty State */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-1 flex flex-col items-center justify-center p-12 text-center bg-indigo-50/20 dark:bg-indigo-900/5 min-h-[300px]">
              <PanelRight size={48} className="text-indigo-500 mb-4 opacity-50" />
              <h3 className="font-bold text-lg mb-2">Side Drawer</h3>
              <p className="text-sm text-gray-400 mb-6 max-w-[200px]">Interactive sliding side panel for extra content.</p>
              <Button variant="primary" icon={PanelRight} onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
            </Card>

            <div className="lg:col-span-2">
              <EmptyState 
                icon={Database}
                title="No database connected"
                description="We couldn't connect to your database instance. Please check your environment variables and try again."
                action={<Button variant="outline" icon={RefreshCcw}>Retry Connection</Button>}
                className="h-full border-indigo-500/20 dark:border-indigo-500/10"
              />
            </div>
          </div>

          <Drawer 
            isOpen={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)}
            title="System Details"
            position="right"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar initials="AD" status="online" />
                  <div>
                    <h4 className="font-bold">System Administrator</h4>
                    <p className="text-xs text-gray-400">admin@starter.template</p>
                  </div>
                </div>
                <hr className="border-gray-100 dark:border-slate-800" />
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="w-full">Edit Profile</Button>
                  <Button variant="outline" size="sm" className="w-full">Security</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">System Load</h4>
                <ProgressBar label="CPU Usage" value={76} variant="warning" size="sm" />
                <ProgressBar label="Memory" value={42} variant="success" size="sm" />
              </div>
            </div>
          </Drawer>
        </section>

        {/* Specialized Overlays */}

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-brand-500">
            <h2 className="text-xl font-bold uppercase tracking-widest">Specialized Overlays</h2>
          </div>
          <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-wrap gap-4">
            <Button variant="danger" onClick={() => setIsConfirmOpen(true)}>Open Confirm Modal</Button>
            
            <ConfirmModal 
              isOpen={isConfirmOpen}
              onClose={() => setIsConfirmOpen(false)}
              onConfirm={() => {
                alert('Confirmed!');
                setIsConfirmOpen(false);
              }}
              title="Delete Permanently?"
              message="Are you sure you want to delete this item? This action is irreversible and data will be lost forever."
              variant="danger"
              confirmText="Delete Now"
            />

            <Button variant="outline" icon={Eye} onClick={() => setIsNotFoundPreview(true)}>Preview 404 Page</Button>
          </div>
        </section>


        {/* Section: Batch 4 - Advanced Components */}
        <section className="space-y-12">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border-b border-gray-100 dark:border-gray-800 pb-4">
            <Layers size={24} />
            <h2 className="text-xl font-bold uppercase tracking-widest">Batch 4: Advanced Components</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Avatars */}
            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Avatars & Status</h3>
              <div className="flex flex-wrap items-end gap-6">
                <Avatar size="sm" status="online" initials="JD" />
                <Avatar size="md" status="away" initials="AB" />
                <Avatar size="lg" status="busy" initials="VK" />
                <Avatar size="xl" status="offline" initials="PS" />
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Avatar size="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop" status="online" />
                <Avatar size="lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop" status="online" />
                <Avatar size="lg" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=120&h=120&fit=crop" status="busy" />
              </div>
            </div>

            {/* Toast System */}
            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Toast Notifications</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={() => addToast('Successfully saved progress!', 'success')}>Success Toast</Button>
                <Button variant="outline" onClick={() => addToast('Failed to connect to server.', 'danger')}>Danger Toast</Button>
                <Button variant="outline" onClick={() => addToast('System maintenance in 5m.', 'warning')}>Warning Toast</Button>
                <Button variant="outline" onClick={() => addToast('New update available.', 'info')}>Info Toast</Button>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Accordion System</h3>
            <Accordion 
              items={[
                { 
                  title: "How do I customize the theme?", 
                  content: "You can modify the primary colors in index.css using Tailwind v4 theme variables. Our system automatically adapts to dark and light modes through global surface tokens." 
                },
                { 
                  title: "Are these components accessible?", 
                  content: "Yes, we use semantic HTML and focus rings ensure keyboard navigability. Many components include ARIA labels and roles for screen reader support." 
                },
                { 
                  title: "Can I use external libraries?", 
                  content: "Absolutely! These components are built with standard React and Tailwind, making them highly compatible with Lucide, Framer Motion, and other popular libraries." 
                }
              ]}
            />
          </div>

          {/* Tabs */}
          <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Premium Tab Navigation</h3>
            <Tabs 
              tabs={[
                { 
                  id: 'profile', 
                  label: 'Profile', 
                  icon: UserCircle,
                  content: (
                    <div className="flex items-center gap-6 p-6 bg-gray-50/50 dark:bg-slate-800/20 rounded-2xl border border-dashed border-gray-200 dark:border-slate-800">
                      <Avatar size="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop" status="online" />
                      <div>
                        <h4 className="text-xl font-bold">John Doe</h4>
                        <p className="text-sm text-gray-500">Premium Developer • Mumbai, India</p>
                        <div className="flex gap-2 mt-4">
                          <Badge variant="soft">React</Badge>
                          <Badge variant="soft">Tailwind v4</Badge>
                        </div>
                      </div>
                    </div>
                  )
                },
                { 
                  id: 'settings', 
                  label: 'Settings', 
                  icon: Settings,
                  content: (
                    <div className="p-6 space-y-4">
                      <Input label="Display Name" placeholder="Update your name" />
                      <Switch label="Public Profile" checked />
                      <Button variant="primary" className="mt-2">Save Changes</Button>
                    </div>
                  )
                },
                { 
                  id: 'notifications', 
                  label: 'Notifications', 
                  icon: Bell,
                  content: (
                    <div className="p-6 space-y-4">
                      <Alert variant="info" title="Push Notifications">
                        Your mobile app is currently not receiving push updates.
                      </Alert>
                      <Checkbox label="Email updates on new features" checked />
                      <Checkbox label="Account security alerts" checked />
                    </div>
                  )
                }
              ]}
            />
          </div>
        </section>


        {/* Section: Data Components (Table) */}

        <section className="space-y-8">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 border-b border-gray-100 dark:border-gray-800 pb-4">
            <TableIcon size={20} />
            <h2 className="text-xl font-bold uppercase tracking-widest">Data Tables</h2>
          </div>

          <Table 
            columns={[
              { header: 'User', accessor: 'name', render: (val, row) => (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 font-bold text-xs">{val[0]}</div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-gray-100">{val}</div>
                    <div className="text-[10px] text-gray-400">{row.email}</div>
                  </div>
                </div>
              )},
              { header: 'Status', accessor: 'status', render: (val) => (
                <Badge variant={val === 'Active' ? 'success' : 'neutral'} size="sm">{val}</Badge>
              )},
              { header: 'Role', accessor: 'role' },
              { header: 'Action', accessor: 'id', render: () => (
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-500"><Trash size={14} /></Button>
              )}
            ]}
            data={[
              { id: 1, name: 'Prashant', email: 'prashant@example.com', status: 'Active', role: 'Full Stack Developer' },
              { id: 2, name: 'Rahul', email: 'rahul@example.com', status: 'Inactive', role: 'UI/UX Designer' },
              { id: 3, name: 'Amit', email: 'amit@example.com', status: 'Active', role: 'Product Manager' }
            ]}
          />
        </section>

        {/* Section: Input & TextArea */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <MessageSquare size={20} />
              <h2 className="text-xl font-bold uppercase tracking-widest">Text & Area</h2>
            </div>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-[10px] font-bold rounded uppercase">Batch 1</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8 bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
              <Input label="Premium Input" icon={User} placeholder="Enter your name" />
              <TextArea label="Premium TextArea" placeholder="Describe your experience..." autoHeight />
            </div>


            <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden group flex items-center">
              <pre className="text-xs text-brand-400 font-mono leading-relaxed overflow-x-auto w-full">
{`<Input 
  label="Name" 
  icon={User} 
/>

<TextArea 
  label="Message" 
  autoHeight 
/>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section: Select & DatePicker */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border-b border-gray-100 dark:border-gray-800 pb-4">
            <List size={20} />
            <h2 className="text-xl font-bold uppercase tracking-widest">Selects & Dates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-surface-card-dark rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
                <Select 
                  label="Country Selection" 
                  options={[
                    { label: 'India', value: 'in' },
                    { label: 'USA', value: 'us' },
                    { label: 'UK', value: 'uk' }
                  ]}
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                />

                <Select 
                  label="Invalid Selection" 
                  error="Selection is required"
                  options={[{ label: 'Option 1', value: '1' }]}
                />
            </div>
            <div className="p-6 bg-white dark:bg-surface-card-dark rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
                <DatePicker 
                  label="Project Start Date" 
                  value={dateValue}
                  onChange={setDateValue}
                />
                <DatePicker 
                  label="Expiry Date" 
                  error="Date cannot be in the past"
                />
            </div>
            <div className="p-6 bg-white dark:bg-surface-card-dark rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center text-center">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-loose">
                  More selection types<br/>coming in next batch...
                </p>
            </div>

          </div>
        </section>

        {/* Section: Choices (Checkbox, Radio, Switch) */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
            <CheckSquare size={20} />
            <h2 className="text-xl font-bold uppercase tracking-widest">Selections & Toggles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checkbox */}
            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Checkboxes</h3>
              <Checkbox 
                label="Enable Notifications" 
                checked={checkboxValue}
                onChange={(e) => setCheckboxValue(e.target.checked)}
              />
              <Checkbox label="Remember Device" checked={true} disabled />
              <Checkbox label="Invalid Option" error="Please check this" />
            </div>

            {/* RadioGroup */}
            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Radio Selection</h3>
              <RadioGroup 
                label="Pick a Fruit"
                name="fruits"
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
                options={[
                    { label: 'Apple', value: 'apple' },
                    { label: 'Banana', value: 'banana' },
                    { label: 'Orange', value: 'orange' }
                ]}
              />
            </div>

            {/* Switch */}
            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Toggles</h3>
              <Switch 
                label="System Status" 
                checked={switchValue}
                onChange={(e) => setSwitchValue(e.target.checked)}
              />
              <Switch label="Marketing Emails" />
              <Switch label="Restricted Access" disabled checked />
            </div>

          </div>
        </section>

        {/* Section: File Upload */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
            <FileUp size={20} />
            <h2 className="text-xl font-bold uppercase tracking-widest">Media Upload</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <FileUpload 
                    label="Upload Identity Proof" 
                    multiple 
                />
            </div>
            <div className="bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <FileUpload 
                    label="Invalid File Type" 
                    error="Only PDF and PNG files are allowed"
                />
            </div>
          </div>

        </section>


        {/* Section: Buttons */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
            <Code size={20} />
            <h2 className="text-xl font-bold uppercase tracking-widest">Button Variants</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8 bg-white dark:bg-surface-card-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg" icon={Send} iconPosition="right">Send</Button>
                <Button loading variant="outline">Action</Button>
              </div>
            </div>


            <div className="bg-gray-950 p-8 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden group">
              <pre className="text-xs text-brand-400 font-mono leading-relaxed overflow-x-auto w-full pt-4">
{`<Button 
  variant="primary" 
  size="lg" 
  icon={Plus}
>
  Add User
</Button>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section: Future */}
        <section className="pt-12">
            <div className="p-12 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl text-center space-y-4">
                <p className="text-gray-400 font-medium">Add more components in components/common folder to see them here.</p>
                <div className="flex justify-center gap-2">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-500 italic">Components complete! 🎉</span>
                </div>
            </div>
        </section>


        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs pt-10 pb-20">
            Proudly built with Tailwind CSS v4 and Lucide React.
        </footer>

      </div>
    </div>
  );
};

export default ComponentShowcase;


