export class HttpErrorHelper {
    static getErrorMessage(error: any): string {
        // toastrService.danger(error.error?.Message ?? , 'Erro');
        return 'Houve um erro inesperado ao efetuar essa ação.';
    }
}