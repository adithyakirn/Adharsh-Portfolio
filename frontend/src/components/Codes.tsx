import { ReactNode } from "react";

export const help: string = `Available commands:

help - Show this help message
experience - See my experience
about - Learn about me
projects - View my projects
contact - Get my contact information
clear - Clear the terminal
ls - List directory contents
whoami - Display current user
date - Today's date`;

export const about: string = `Hey Im Adharsh,

┌──────────────────────────────────┐
│  Adharsh — Tech Lead (AI/ML)     │
│ ────────────────────────────     │
│ Scalable data systems for        │
│ retail • agriculture • geo       │
│                                  │
│ • Cloud-native pipelines         │
│ • ML + Backend integration       │
│ • Real-time business insights    │
│                                  │
│ AWS | GCP | Airflow | Databricks │
│ FastAPI | Supabase | GEE         │
└──────────────────────────────────┘
Adharsh — Tech Lead | AI/ML & Data Engineering
Tech Lead specializing in scalable, cloud-native data systems across retail, agriculture, and geospatial analytics. I design high-volume pipelines, integrate ML & backend services, and deliver real-time, impact-driven insights. Proven expertise in AWS, GCP, Airflow, FastAPI, Supabase, Databricks, and Google Earth Engine.
Passionate about turning complex data into actionable intelligence that drives business results.`;

export const notFound: string = `Command not found,
Try typing these commands:

help - Show Available commands
experience - See my experience
about - Learn about me
projects - View my projects
contact - Get my contact information
clear - Clear the terminal
ls - List directory contents
whoami - Display current user
date - Today's date`;

export const ls: string = `
drwxr-xr-x 2 user user 4096 Jan 15 10:30 about/
drwxr-xr-x 2 user user 4096 Jan 15 10:30 projects/
drwxr-xr-x 2 user user 4096 Jan 15 10:30 contact/
-rw-r--r-- 1 user user 1337 Jan 15 10:30 README.md
-rwxr-xr-x 1 user user 2048 Jan 15 10:30 portfolio.sh`;

const now: Date = new Date();

export const date = now.toString();

export const contact: ReactNode = (
  <div>
    <pre>
      {`   ____ ___  _   _ _____ _____    ____ ________
  / ___/ _ \\| \\ | |_   _|  __  | / ___|__   ___|
 | |  | | | |  \\| | | | | |  | || |      | |
 | |__| |_| | |\\  | | | | |__| || |___   | |
  \\____\\___/|_| \\_| |_| |_|  | | \\____   |_|`}
    </pre>

    <p>Contact Adharsh CB</p>
    <p>Phone: 8129662005</p>
    <p>
      Email:{" "}
      <a href="mailto:adharshcheloor@gmail.com">adharshcheloor@gmail.com</a>
    </p>
    <p>
      GitHub:{" "}
      <a
        href="https://github.com/adharshcb"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/adharshcb
      </a>
    </p>
    <p>
      LinkedIn:{" "}
      <a
        href="https://linkedin.com/in/adharshcb"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://linkedin.com/in/adharshcb
      </a>
    </p>
  </div>
);

export const experience: string = `+---------------------------------------------------------+
|                      EXPERIENCE                         |
+---------------------------------------------------------+

Farms.io
---------
Full-time · 2 yrs 5 mos
Remote

Lead ML Engineer
  Jul 2025 - Present (2 mos)

Machine Learning Engineer
  Apr 2024 - Jul 2025 (1 yr 4 mos)
  Chennai, Tamil Nadu, India

Junior Machine Learning Engineer
  Apr 2023 - Apr 2024 (1 yr 1 mo)
  Chennai, Tamil Nadu, India

Skills: Google Earth Engine, FastAPI, +6 more`;
