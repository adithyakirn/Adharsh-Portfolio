import { ReactNode } from "react";

export const help: string = `Available commands:

help - Show this help message
about - Learn about me
projects - View my projects
contact - Get my contact information
clear - Clear the terminal
ls - List directory contents
whoami - Display current user`;

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
Passionate about turning complex data into actionable intelligence that drives business results.
If you want, I can also make it one punchy LinkedIn-style sentence as your professional hook.`;

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
      <a href="mailto:adharshcheloor@gmail.com">
        adharshcheloor@gmail.com
      </a>
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