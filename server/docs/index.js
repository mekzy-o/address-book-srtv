import swagger from './swagger.json';
import { loginDocs, signupDocs } from './auth';
import { createContactDocs } from './firebase';

swagger.paths['/auth/signin'] = loginDocs;
swagger.paths['/auth/signup'] = signupDocs;
swagger.paths['/firebase/contacts'] = createContactDocs;

export default swagger;
