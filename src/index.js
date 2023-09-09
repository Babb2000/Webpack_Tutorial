import{run} from "./app/app"
import { AlertService } from "./app/alert.sevice"
import { ComponentService } from "./app/component.service";


const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);