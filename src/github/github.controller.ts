import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(private githubService: GithubService){}

    @Get()
    githubHello(){
        return this.githubService.githubHello();
    }
}
