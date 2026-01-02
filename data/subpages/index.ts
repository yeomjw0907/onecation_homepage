import { SubPageContent } from '../../types';

// Import all subpage content
import { SYSTEM_SUBPAGES } from './system';
import { FOUNDATION_SUBPAGES } from './foundation';
import { CREATION_SUBPAGES } from './creation';
import { ACCELERATION_SUBPAGES } from './acceleration';
import { WORK_SUBPAGES } from './work';
import { OLAB_SUBPAGES } from './olab';
import { CONTACT_SUBPAGES } from './contact';

export const SUBPAGE_CONTENT: Record<string, SubPageContent> = {
    ...SYSTEM_SUBPAGES,
    ...FOUNDATION_SUBPAGES,
    ...CREATION_SUBPAGES,
    ...ACCELERATION_SUBPAGES,
    ...WORK_SUBPAGES,
    ...OLAB_SUBPAGES,
    ...CONTACT_SUBPAGES,
};
