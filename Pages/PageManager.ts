import { Page } from "@playwright/test";
import {ApiBase} from "./ApiBase";

export class PageManager{
    page: Page;
    apiBase: ApiBase;

    constructor(page: Page){
        this.page = page;
        this.apiBase = new ApiBase(page);
    }
}