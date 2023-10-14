import { BasePage } from "./BasePage";

export class ApiBase extends BasePage{
    async getRequest(){
        const response = await this.page.request.get('https://reqres.in/api/users?page=2')
        return response;
    }
}