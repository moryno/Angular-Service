export class LoggingService{
    logginChange(status: string){
        console.log('Logging: A server status changed, new status: ' + status)
    }
} 