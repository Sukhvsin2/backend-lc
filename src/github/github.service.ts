import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
    githubHello(){
        return "Hello from Github API"
    }
}
