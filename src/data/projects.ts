export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  impact: string[]
  stack: string[]
  icon: string
}

export const PROJECTS: Project[] = [
  {
    id: 'emmcsign',
    name: 'EMMCSign',
    tagline: 'Digital signature platform with audit trail',
    icon: 'pi pi-pencil',
    description:
      'A document signing workflow system built in React, with role-based access control, full audit trail, and notifications — designed to move approvals off paper without losing accountability or UI clarity.',
    impact: [
      'Cut paper-based approval cycles significantly',
      'Role-based access control for every approval step',
      'Full audit trail and automatic notifications',
    ],
    stack: ['ReactJS', 'Ant Design', 'RBAC', 'Audit Logging'],
  },
  {
    id: 'emmcrms',
    name: 'EMMCRMS',
    tagline: 'Internal IT ticketing system with reporting',
    icon: 'pi pi-ticket',
    description:
      'Built an internal ticketing system to replace manual tracking of IT issues. Designed separate, role-specific dashboards for admins and technicians, plus a reporting layer that surfaces resolution time and team performance.',
    impact: [
      'Replaced manual spreadsheet tracking entirely',
      'Improved average ticket resolution time',
      'Gave management visibility into IT team performance',
    ],
    stack: ['JavaScript', 'PHP', 'MySQL'],
  },
  {
    id: 'erp',
    name: 'ERP/SAP Migration System',
    tagline: 'Full system migration across 7 production modules',
    icon: 'pi pi-server',
    description:
      'Led the migration, integration, and ongoing maintenance of Exelpack\'s ERP/SAP environment, covering PMMS, CPOSMS, PRMS, WRMS, WIMS, PJOMS, and PSMS — including the interfaces that made each module usable by non-technical staff.',
    impact: [
      'Migrated 7 interdependent ERP modules with zero data loss',
      'Rebuilt access control to match real department boundaries',
      'Automated cross-department workflow handoffs',
    ],
    stack: ['PHP', 'MySQL', 'Data Migration'],
  },
  {
    id: 'aws',
    name: 'AWS Infrastructure Deployment',
    tagline: 'EC2 hosting for QuickBooks and internal systems',
    icon: 'pi pi-cloud',
    description:
      'Set up and hardened EC2 instances running Windows Server 2025 to host QuickBooks and internal systems. Configured IAM roles and security policies, RDP access, and server hardening so the environment could support remote teams without exposing it unnecessarily.',
    impact: [
      'Stood up production-ready EC2 environment from scratch',
      'Configured least-privilege IAM roles and security groups',
      'Hardened RDP access for secure remote administration',
    ],
    stack: ['AWS EC2', 'IAM', 'Windows Server 2025'],
  },
]
