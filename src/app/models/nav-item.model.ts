import { NavItemDeviceSizeModel } from "./nav-tem-device-size.model";

export class NavItemModel {
    routeLink: string = '';
    icon: string = '';
    label: string = '';
    customClass?: string = '';
    deviceSize: NavItemDeviceSizeModel = NavItemDeviceSizeModel.All;
}